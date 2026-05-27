import {
  allUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../Services/users.service.js";

export async function usersControllerPost(req, res) {
  try {
    const newUser = await createUser(req.body.email, req.body.pass);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: `Erro ao criar usuário ${error}`});
  }
}

export async function usersControllerGet(req, res) {
  try {
    const userAll = await allUsers();
    res.status(200).json(userAll);
  } catch (error) {
    res.status(400).json({ message: `Erro ao puxar dados ${error}` })
  }
}

export async function usersControllerDel(req, res) {
  try {
    const delUser = await deleteUser(req.params.id);
    res.status(200).json(delUser);
  } catch (error) {
    res.status(400).json({ message: `Erro ao deletar usuário ${error}`})
  }
}

export async function usersControllerUpd(req, res) {
  try {
    const updtUser = await updateUser(
    Number(req.params.id),
    req.body.email,
    req.body.pass,
  );
    res.status(200).json(updtUser);
  } catch (error) {
    res.status(400).json({ message: `Erro ao atualizar usuário ${error}`})
  }
}
