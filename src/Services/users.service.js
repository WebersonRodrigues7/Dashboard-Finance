import { prisma } from "../lib/prisma.js";


export async function createUser(email, pass) {

    const newUser = await prisma.user.create ({
        data: {
            email: email,
            pass: pass
        }
    });
    return newUser;
}

export async function allUsers() {

    const userAll = await prisma.user.findMany ()

    return userAll;
}

export async function deleteUser (id) {

    const delUser = await prisma.user.delete ({
        where:{id: Number(id)} 
    })

    return delUser;
}