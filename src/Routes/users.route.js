import { Router } from "express";
import { usersControllerDel, usersControllerGet, usersControllerPost } from "../Controllers/users.controller.js";

export const userRouter = Router ()

userRouter.post('/', usersControllerPost)

userRouter.get('/', usersControllerGet)

userRouter.delete('/:id', usersControllerDel)