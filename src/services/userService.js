const User = require("../models/user");

async function getAllUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
}

async function createUser(name, email, password) {
  try {
    return await User.create({ name, email, password });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

async function updateUser(id, name) {
  try {
    const [updatedRows] = await User.update({ name }, { where: { id } });
    if (updatedRows === 0) {
      throw new Error("Estudante não encontrado");
    }
    return await User.findByPk(id);
  } catch (error) {
    console.error("Erro ao atualizar estudante:", error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const deletedRows = await User.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error("Estudante não encontrado");
    }
    return { message: "Estudante deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar estudante:", error);
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (user.password !== password) {
      throw new Error("Senha incorreta");
    }

    return { message: "Login bem-sucedido", user };
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
