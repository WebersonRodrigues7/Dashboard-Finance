import {
  allUsers,
  createUser,
  deleteUser,
  updateUser,
} from '../Services/users.service.js';

export async function usersControllerPost(req, res) {
  const newUser = await createUser(req.body.email, req.body.pass);

  res.json(newUser);
}

export async function usersControllerGet(req, res) {
  const userAll = await allUsers();

  res.json(userAll);
}

export async function usersControllerDel(req, res) {
  const delUser = await deleteUser(req.params.id);

  res.json(delUser);
}

export async function usersControllerUpd(req, res) {
  const updtUser = await updateUser(
    Number(req.params.id),
    req.body.email,
    req.body.pass,
  );

  res.json(updtUser);
}
