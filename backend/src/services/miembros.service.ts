import prisma from '../utils/prisma.js';

export const miembrosService = {
  /**
   * Obtiene todos los usuarios que no son administradores (Curadores)
   */
  async getAll() {
    return await prisma.usuario.findMany({
      where: {
        rol: {
          nombre: {
            in: ['ENCARGADO', 'ASISTENTE']
          }
        }
      },
      include: { 
        rol: true,
        asistencias: true 
      },
    });
  },

  async create(data: any) {
    // Validaciones de negocio alineadas con el manual de curadores
    if (data.edad && data.edad < 18) {
      throw new Error('El miembro debe ser mayor de 18 años para operar.');
    }

    // El password por defecto para nuevos curadores (debe ser cambiado tras el primer login)
    // Nota: Aquí se debería recibir el hashbcrypt del controller o generarlo
    
    return await prisma.usuario.create({ 
      data: {
        ...data,
        activo: true
      }
    });
  },

  async update(id: string, data: any) {
    const actualizado = await prisma.usuario.update({
      where: { id },
      data,
      include: { rol: true }
    });

    // SISTEMA DE ALERTAS AUTOMÁTICAS: Si se marca como inactivo
    if (data.activo === false) {
      await prisma.alerta.create({
        data: {
          usuario_id: id,
          tipo: 'BAJA_ADMINISTRATIVA',
          mensaje: `El usuario ${actualizado.nombre} ha sido desactivado del sistema.`,
          nivel: 'WARNING'
        }
      });
    }

    return actualizado;
  },

  async delete(id: string) {
    // Se recomienda soft delete (desactivar activo) en lugar de borrado físico para auditoría
    return await prisma.usuario.update({ 
      where: { id },
      data: { activo: false }
    });
  },

  /**
   * Registra una asistencia para un usuario
   */
  async registrarAsistencia(usuarioId: string, estado: string, observaciones?: string) {
    const asistencia = await prisma.asistencia.create({
      data: {
        usuario_id: usuarioId,
        fecha: new Date(),
        estado,
        observaciones
      }
    });

    // Actualizamos la última actividad del usuario
    await prisma.usuario.update({
      where: { id: usuarioId },
      data: { ultima_actividad: new Date() }
    });

    return asistencia;
  }
};
