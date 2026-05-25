import { allUsers, createUser, deleteUser } from "../Services/users.service.js";

export async function usersControllerPost (req, res) {
   const newUser = await createUser (req.body.email, req.body.pass)

   res.json(newUser)
}

export async function usersControllerGet (req, res) {
   const userAll = await allUsers ()

   res.json(userAll)
}

export async function usersControllerDel (req, res) {
   const delUser = await deleteUser (req.params.id)

   res.json(delUser)
}