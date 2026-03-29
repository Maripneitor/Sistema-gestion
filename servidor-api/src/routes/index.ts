import { Router } from 'express';
import authRoutes from './auth.routes';
import miembrosRoutes from './miembros.routes';
import asistenciasRoutes from './asistencias.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/miembros', miembrosRoutes);
router.use('/asistencias', asistenciasRoutes);

export default router;
