import { Router } from "express";
import { LoginController } from "../Controllers/login.controller.js";


export const loginRouter = Router()


loginRouter.post('/', LoginController)