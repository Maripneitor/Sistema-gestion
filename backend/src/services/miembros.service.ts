import prisma from '../utils/prisma';
import { EstadoMiembro } from '@prisma/client';

export const miembrosService = {
  async getAll() {
    return await prisma.miembro.findMany({
      include: { asistencias: true },
    });
  },

  async create(data: any) {
    // Validaciones estrictas
    if (data.edad < 18) {
      throw new Error('El miembro debe ser mayor de 18 años.');
    }

    const paisesBloqueados = ['Perú', 'España', 'PERU', 'ESPAÑA'];
    if (paisesBloqueados.includes(data.pais.toUpperCase()) || paisesBloqueados.includes(data.pais)) {
      throw new Error('El registro no está permitido para el pais especificado.');
    }

    return await prisma.miembro.create({ data });
  },

  async update(id: string, data: any) {
    const actualizado = await prisma.miembro.update({
      where: { id },
      data,
    });

    // DISPARO ASÍNCRONO SI CAMBIÓ EL NIVEL
    if (data.nivel !== undefined) {
      import('./sheets.service').then(({ sheetsService }) => {
        sheetsService.updateMemberLevel({
          nombre: actualizado.nombre_real,
          nivel: actualizado.nivel,
        });
      }).catch(err => console.error('[Sheets Trigger Error]', err));
    }

    return actualizado;
  },

  async delete(id: string) {
    return await prisma.miembro.delete({ where: { id } });
  },

  /**
   * Evalúa si el miembro debe entrar en riesgo de baja por faltas.
   * Sistema de reemplazo sugerido por el usuario.
   */
  async evaluarEstadoRiesgo(miembroId: string, limiteFaltas: number = 3) {
    const miembro = await prisma.miembro.findUnique({
      where: { id: miembroId },
      include: { asistencias: true },
    });

    if (!miembro) throw new Error('Miembro no encontrado.');

    // Contamos las faltas en las asistencias registradas
    const totalFaltas = miembro.asistencias.filter(a => a.estado_asistencia === 'FALTA').length;

    if (totalFaltas >= limiteFaltas && miembro.estado === EstadoMiembro.ACTIVO) {
      return await prisma.miembro.update({
        where: { id: miembroId },
        data: {
          estado: EstadoMiembro.EN_RIESGO_DE_BAJA,
          faltas_acumuladas: totalFaltas,
        },
      });
    }

    return miembro;
  }
};
