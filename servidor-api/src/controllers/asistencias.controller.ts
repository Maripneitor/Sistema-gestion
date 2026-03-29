import { NextFunction, Request, Response } from 'express';
import { asistenciasService } from '../services/asistencias.service';

export const markAsistencia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nueva = await asistenciasService.markPresence(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    next(error);
  }
};

export const getWeeklyAsistencias = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await asistenciasService.getVistaSemanal();
    res.json(list);
  } catch (error) {
    next(error);
  }
};
