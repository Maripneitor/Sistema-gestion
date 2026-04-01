import { Router } from 'express';
import { getMiembros, createMiembro, updateMiembro, deleteMiembro } from '../controllers/miembros.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// Todos los usuarios autenticados pueden ver la lista
router.get('/', authMiddleware(['ADMIN', 'ENCARGADO', 'ASISTENTE']), getMiembros);

// Solo encargados y admins pueden escribir/editar
router.post('/', authMiddleware(['ADMIN', 'ENCARGADO']), createMiembro);
router.put('/:id', authMiddleware(['ADMIN', 'ENCARGADO']), updateMiembro);
router.delete('/:id', authMiddleware(['ADMIN', 'ENCARGADO']), deleteMiembro);

export default router;

