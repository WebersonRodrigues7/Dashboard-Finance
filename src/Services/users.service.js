import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';
export async function createUser(email, pass) {
  const hashPass = await bcrypt.hash(String(pass), Number(10));
  const newUser = await prisma.user.create({
    data: {
      email: email,
      pass: String(hashPass),
    },
  });
  
  return newUser;
}

export async function allUsers() {
  const userAll = await prisma.user.findMany();

  return userAll;
}

export async function deleteUser(id) {
  const delUser = await prisma.user.delete({
    where: { id: Number(id) },
  });

  return delUser;
}

export async function updateUser(id, email, pass) {
  const hashPass = await bcrypt.hash(String(pass), Number(10));
  const updtUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      email: email,
      pass: String(hashPass),
    },
  });

  return updtUser;
}
