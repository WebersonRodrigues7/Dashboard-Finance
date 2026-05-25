import { Router } from "express";
import { usersControllerPost } from "../Controllers/users.controller.js";

export const userRouter = Router ()

userRouter.post('/', usersControllerPost)