import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';
export async function createUser(email, pass) {
  try {
    const hashPass = await bcrypt.hash(String(pass), Number(10));
    const newUser = await prisma.user.create({
      data: {
        email: email,
        pass: String(hashPass),
      },
    });

    return newUser;
  } catch (err) {
    throw new Error(err);
  }
}

export async function allUsers() {
  try {
    const userAll = await prisma.user.findMany();

    return userAll;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteUser(id) {
  try {
    const delUser = await prisma.user.delete({
      where: { id: Number(id) },
    });

    return delUser;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateUser(id, email, pass) {
  try {
    const hashPass = await bcrypt.hash(String(pass), Number(10));
    const updtUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        email: email,
        pass: String(hashPass),
      },
    });

    return updtUser;
  } catch (err) {
    throw new Error(err);
  }
}
