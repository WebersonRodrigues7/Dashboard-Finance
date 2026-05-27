import { Login } from "../Services/login.service.js";

export async function LoginController(req, res) {
const loginFinance = await Login(req.body.email, req.body.pass)

res.json(loginFinance)
}