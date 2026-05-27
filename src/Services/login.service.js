import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export async function Login(email, pass) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const comparePass = await bcrypt.compare(pass, user.pass);
    const secretKey = process.env.JWT_SECRET;

    if (user.email === email && comparePass === true) {
      const tokenn = await jsonwebtoken.sign(
        { id: user.id, email: user.email },
        secretKey,
        {
          expiresIn: '1h',
        },
      );
      return tokenn;
    }
  } catch (err) {
    throw new Error(err)
  }
}
