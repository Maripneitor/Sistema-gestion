import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (roles: string[] = []) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No se proporcionó un token de acceso.' });
    }

    try {
      const decoded = verifyToken(token) as any;
      req.user = decoded;

      if (roles.length > 0 && !roles.includes(decoded.rol)) {
        return res.status(403).json({ message: 'No tienes permisos para acceder a este recurso.' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token de acceso inválido o expirado.' });
    }
  };
};
