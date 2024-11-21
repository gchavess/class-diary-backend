const userService = require("../services/userService");

async function getUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body;
  console.log("Request Body:", req.body);
  console.log("Type of name:", typeof name);

  try {
    const newUser = await userService.createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });

    res.status(500).json({ message: "Erro ao criar usuário" });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }

  try {
    const updatedUser = await userService.updateUser(id, name);
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const result = await userService.deleteUser(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    const loginResult = await userService.loginUser(email, password);
    res.json(loginResult);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
