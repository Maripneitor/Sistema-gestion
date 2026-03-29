import { Router } from 'express';
import { markAsistencia, getWeeklyAsistencias } from '../controllers/asistencias.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Ambos roles pueden marcar asistencias y ver la vista semanal
router.post('/', authMiddleware(['ENCARGADO', 'ASISTENTE']), markAsistencia);
router.get('/semanal', authMiddleware(['ENCARGADO', 'ASISTENTE']), getWeeklyAsistencias);

export default router;
