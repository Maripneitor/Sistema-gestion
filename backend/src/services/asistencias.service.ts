import prisma from '../utils/prisma';
import { miembrosService } from './miembros.service';

export const asistenciasService = {
  async markPresence(data: any) {
    const { usuario_id, estado, observaciones } = data;

    const asistencia = await prisma.asistencia.create({
      data: {
        usuario_id,
        fecha: new Date(),
        estado,
        observaciones,
      },
      include: { usuario: true },
    });

    // Actualizamos la última actividad del usuario de forma inmediata
    await prisma.usuario.update({
      where: { id: usuario_id },
      data: { ultima_actividad: new Date() }
    });

    // DISPARO ASÍNCRONO HACIA GOOGLE SHEETS
    import('./sheets.service').then(({ sheetsService }) => {
      sheetsService.appendAssistance({
        nombre: asistencia.usuario.nombre,
        fecha: asistencia.fecha.toISOString(),
        estado: asistencia.estado,
        observaciones: asistencia.observaciones,
      });
    }).catch(err => console.error('[Sheets Trigger Error]', err));

    return asistencia;
  },

  async getVistaSemanal() {
    const hoy = new Date();
    const diaSemana = hoy.getDay() === 0 ? 6 : hoy.getDay() - 1;
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - diaSemana);
    inicioSemana.setHours(0, 0, 0, 0);

    const finSemana = new Date(inicioSemana);
    finSemana.setDate(inicioSemana.getDate() + 6);
    finSemana.setHours(23, 59, 59, 999);

    return await prisma.asistencia.findMany({
      where: {
        fecha: {
          gte: inicioSemana,
          lte: finSemana,
        },
      },
      include: {
        usuario: true,
      },
      orderBy: {
        fecha: 'desc',
      },
    });
  }
};
