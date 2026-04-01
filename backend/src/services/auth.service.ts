import bcrypt from 'bcryptjs';
import prisma from '../utils/prisma';
import { generateToken } from '../utils/jwt';

export const authService = {
  async login(email: string, pass: string) {
    const user = await prisma.usuario.findUnique({ 
      where: { email },
      include: { rol: true } 
    });
    
    if (!user) throw new Error('Credenciales inválidas.');

    const isMatch = await bcrypt.compare(pass, user.password_hash);
    if (!isMatch) throw new Error('Credenciales inválidas.');

    const token = generateToken({ id: user.id, rol: user.rol?.nombre });
    return { 
      user: { 
        id: user.id, 
        nombre: user.nombre, 
        email: user.email, 
        rol: user.rol?.nombre 
      }, 
      token 
    };
  },

  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await prisma.usuario.create({
      data: {
        ...data,
        password_hash: hashedPassword,
      },
    });
  }
};
