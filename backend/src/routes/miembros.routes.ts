import { Router } from 'express';
import { getMiembros, createMiembro, updateMiembro, deleteMiembro } from '../controllers/miembros.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Todos los usuarios autenticados pueden ver la lista
router.get('/', authMiddleware(['ENCARGADO', 'ASISTENTE']), getMiembros);

// Solo encargados pueden escribir/editar
router.post('/', authMiddleware(['ENCARGADO']), createMiembro);
router.put('/:id', authMiddleware(['ENCARGADO']), updateMiembro);
router.delete('/:id', authMiddleware(['ENCARGADO']), deleteMiembro);

export default router;
