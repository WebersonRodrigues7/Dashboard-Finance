import { Login } from '../Services/login.service.js';

export async function LoginController(req, res) {
  try {
    const loginFinance = await Login(req.body.email, req.body.pass);

    res.status(200).json(loginFinance);
  } catch (err) {
    res.status(401).json(err);
  }
}
