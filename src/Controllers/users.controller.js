import { createUser } from "../Services/users.service.js";

export async function usersControllerPost (req, res) {
   const createUser = await createUser (req.body.email, req.body.pass)

   res.json(createUser)
}