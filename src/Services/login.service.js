import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export async function Login(email, pass) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    const comparePass = await bcrypt.compare(pass, user.pass);
    const secretKey = process.env.JWT_SECRET;

    if (comparePass == false) {
      console.log('erro');
    }

    const tokenn = await jsonwebtoken.sign(
      { id: user.id, email: user.email },
      secretKey,
      {
        expiresIn: '1h',
      },
    );
    console.log(tokenn)
    return tokenn;
  } catch (err) {
    console.log(err);
  }
}
