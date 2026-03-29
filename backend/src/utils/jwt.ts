import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'fallback_secret_key_123';

export const generateToken = (payload: object) => {
  return jwt.sign(payload, SECRET, { expiresIn: '8h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};
