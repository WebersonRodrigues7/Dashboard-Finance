import express from 'express';
import { userRouter } from './src/Routes/users.route.js';
import { loginRouter } from './src/Routes/login.route.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter)
app.use('/auth/login', loginRouter)

app.listen(3005);
