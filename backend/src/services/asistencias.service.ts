import prisma from '../utils/prisma';
import { miembrosService } from './miembros.service';

export const asistenciasService = {
  async markPresence(data: any) {
    const { miembro_id, estado_asistencia, registrado_por } = data;

    const asistencia = await prisma.asistencia.create({
      data: {
        miembro_id,
        estado_asistencia,
        registrado_por,
      },
      include: { miembro: true },
    });

    // Evaluamos si el miembro entra en riesgo de baja si se registró una falta
    if (estado_asistencia === 'FALTA') {
      await miembrosService.evaluarEstadoRiesgo(miembro_id);
    }

    // DISPARO ASÍNCRONO HACIA GOOGLE SHEETS (SIN AWAIT)
    import('./sheets.service').then(({ sheetsService }) => {
      sheetsService.appendAssistance({
        nombre: asistencia.miembro.nombre_real,
        fecha: asistencia.fecha.toISOString(),
        estado: estado_asistencia,
        registradoPor: registrado_por,
      });
    }).catch(err => console.error('[Sheets Trigger Error]', err));

    return asistencia;
  },

  async getVistaSemanal() {
    // Calculamos el rango de la semana actual (Lunes a Domingo)
    const hoy = new Date();
    const diaSemana = hoy.getDay() === 0 ? 6 : hoy.getDay() - 1; // 0 para Lunes, ..., 6 para Domingo
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
        miembro: true,
      },
      orderBy: {
        fecha: 'desc',
      },
    });
  }
};
