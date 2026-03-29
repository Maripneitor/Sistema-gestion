import { PrismaClient, RolUsuario, PlataformaGrupo, EstadoAsistencia } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Fase 1: Limpiando base de datos...');
  await prisma.asistencia.deleteMany();
  await prisma.miembros_Grupos.deleteMany();
  await prisma.miembro.deleteMany();
  await prisma.grupo.deleteMany();
  await prisma.usuario.deleteMany();

  console.log('🌱 Fase 2: Creando usuarios admin y asistente...');
  // Nota: En producción usar mayor número de rondas, 10 es estándar para dev
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  await prisma.usuario.createMany({
    data: [
      {
        email: 'admin@sistema.com',
        password: hashedPassword,
        nombre: 'Administrador Senior',
        rol: RolUsuario.ENCARGADO,
      },
      {
        email: 'asistente@sistema.com',
        password: hashedPassword,
        nombre: 'Asistente de Turno',
        rol: RolUsuario.ASISTENTE,
      }
    ]
  });

  console.log('🌱 Fase 3: Creando grupos base...');
  const whatsappStaff = await prisma.grupo.create({
    data: {
      nombre_grupo: 'Staff Principal (WhatsApp)',
      plataforma: PlataformaGrupo.WHATSAPP,
      nivel_minimo_requerido: 5,
    }
  });

  const appExterna = await prisma.grupo.create({
    data: {
      nombre_grupo: 'Nivel Avanzado (App)',
      plataforma: PlataformaGrupo.APP_EXTERNA,
      nivel_minimo_requerido: 10,
    }
  });

  console.log('🌱 Fase 4: Creando miembros de prueba...');
  const miembrosData = [
    { nombre_real: 'Juan Pérez', nombre_app: 'JuanP_UX', edad: 25, pais: 'México', nivel: 12 },
    { nombre_real: 'María García', nombre_app: 'MariG_Dev', edad: 22, pais: 'España', nivel: 20 },
    { nombre_real: 'Carlos Rodríguez', nombre_app: 'Carlitos_Prod', edad: 28, pais: 'Chile', nivel: 8 },
    { nombre_real: 'Ana Martínez', nombre_app: 'AnaM_QA', edad: 24, pais: 'Colombia', nivel: 15 },
    { nombre_real: 'Luis Sánchez', nombre_app: 'LuisS_Backend', edad: 30, pais: 'Argentina', nivel: 5 },
  ];

  for (const m of miembrosData) {
    const miembro = await prisma.miembro.create({
      data: {
        ...m,
        grupos: {
          create: {
            grupo_id: m.nivel >= 10 ? appExterna.id : whatsappStaff.id
          }
        }
      }
    });
    
    // Asistencia inicial para cada uno
    await prisma.asistencia.create({
      data: {
        miembro_id: miembro.id,
        estado_asistencia: EstadoAsistencia.PRESENTE,
        registrado_por: 'admin@sistema.com'
      }
    });
  }

  console.log('✅ Seeding completado con éxito.');
  console.log('🔑 Credenciales generadas:');
  console.log('   - Admin: admin@sistema.com / password123');
  console.log('   - Asistente: asistente@sistema.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
