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