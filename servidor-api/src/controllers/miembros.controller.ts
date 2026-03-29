import { NextFunction, Request, Response } from 'express';
import { miembrosService } from '../services/miembros.service';

export const getMiembros = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await miembrosService.getAll();
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const createMiembro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nuevo = await miembrosService.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    next(error);
  }
};

export const updateMiembro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const actualizado = await miembrosService.update(id, req.body);
    res.json(actualizado);
  } catch (error) {
    next(error);
  }
};

export const deleteMiembro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await miembrosService.delete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
