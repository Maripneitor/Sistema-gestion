import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Fase 1: Limpiando base de datos...');
  await prisma.sesion.deleteMany();
  await prisma.auditoriaLog.deleteMany();
  await prisma.asistencia.deleteMany();
  await prisma.permiso.deleteMany();
  await prisma.alerta.deleteMany();
  await prisma.configuracion.deleteMany();
  await prisma.sincronizacion.deleteMany();
  await prisma.listaEspera.deleteMany();
  await prisma.bajasUsuario.deleteMany();
  await prisma.usuarioGrupoHistorial.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.rol.deleteMany();
  await prisma.grupo.deleteMany();

  console.log('🌱 Fase 2: Creando Roles...');
  const roleAdmin = await prisma.rol.create({
    data: {
      nombre: 'ADMIN',
      descripcion: 'Acceso total al sistema',
    },
  });

  const roleEncargado = await prisma.rol.create({
    data: {
      nombre: 'ENCARGADO',
      descripcion: 'Gestión completa de miembros y asistencias',
    },
  });

  const roleAsistente = await prisma.rol.create({
    data: {
      nombre: 'ASISTENTE',
      descripcion: 'Lectura limitada y control de pase',
    },
  });

  console.log('🌱 Fase 3: Creando Grupos Iniciales...');
  const grupoAlfa = await prisma.grupo.create({
    data: {
      nombre: 'Alfa',
      descripcion: 'Grupo principal de operaciones',
    },
  });

  const grupoBeta = await prisma.grupo.create({
    data: {
      nombre: 'Beta',
      descripcion: 'Grupo secundario de soporte',
    },
  });

  console.log('🌱 Fase 4: Creando Usuario Administrador...');
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const adminUser = await prisma.usuario.create({
    data: {
      email: 'admin@sistema.com',
      password_hash: hashedPassword,
      nombre: 'Administrador Senior',
      edad: 25,
      rol_id: roleAdmin.id,
      grupo_id: grupoAlfa.id,
      estado: 'ACTIVO',
      app_name: 'Nexus_Admin⚡',
    },
  });

  console.log('🌱 Fase 5: Creando Usuarios de Prueba (Curadores)...');
  const user1 = await prisma.usuario.create({
    data: {
      email: 'curador1@sistema.com',
      password_hash: hashedPassword,
      nombre: 'Juan Pérez',
      edad: 28,
      rol_id: roleAsistente.id,
      grupo_id: grupoAlfa.id,
      estado: 'ACTIVO',
      app_name: 'JuanP_Curator⚡',
      telefono: '+34 600 000 001',
    },
  });

  console.log('🌱 Fase 6: Generando Datos de Operación Inicial...');
  await prisma.asistencia.create({
    data: {
      usuario_id: user1.id,
      fecha: new Date(),
      estado: 'PRESENTE',
      observaciones: 'Ingreso puntual sistema Nexus',
    },
  });

  await prisma.alerta.create({
    data: {
      usuario_id: user1.id,
      tipo: 'INACTIVIDAD',
      mensaje: 'El usuario no ha registrado actividad hoy',
      nivel: 'INFO',
    },
  });

  await prisma.configuracion.createMany({
    data: [
      { clave: 'SYSTEM_NAME', valor: 'Nexus Admin Authority', descripcion: 'Nombre visible de la plataforma' },
      { clave: 'MAINTENANCE_MODE', valor: 'false', descripcion: 'Estado de mantenimiento global' },
    ],
  });

  console.log('✅ Seeding completado con éxito.');
  console.log('🔑 Credenciales generadas:');
  console.log('   - Admin: admin@sistema.com / password123');
  console.log('   - Acceso Rápido: curador1@sistema.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
