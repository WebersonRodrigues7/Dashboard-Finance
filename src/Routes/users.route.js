import { Router } from 'express';
import {
  usersControllerDel,
  usersControllerGet,
  usersControllerPost,
  usersControllerUpd,
} from '../Controllers/users.controller.js';
import { middleware } from '../../middleware.js';

export const userRouter = Router();

userRouter.post('/', usersControllerPost);

userRouter.get('/', middleware, usersControllerGet);

userRouter.delete('/:id', middleware, usersControllerDel);

userRouter.put('/:id', middleware, usersControllerUpd);
