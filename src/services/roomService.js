const Room = require("../models/room");

async function getAllRooms() {
  try {
    return await Room.findAll();
  } catch (error) {
    console.error("Erro ao buscar salas:", error);
    throw error;
  }
}

async function createRoom(name) {
  try {
    return await Room.create({ name });
  } catch (error) {
    console.error("Erro ao criar sala:", error);
    throw error;
  }
}

async function updateRoom(id, name) {
  try {
    const [updatedRows] = await Room.update({ name }, { where: { id } });
    if (updatedRows === 0) {
      throw new Error("sala não encontrado");
    }
    return await Room.findByPk(id);
  } catch (error) {
    console.error("Erro ao atualizar sala:", error);
    throw error;
  }
}

async function deleteRoom(id) {
  try {
    const deletedRows = await Room.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error("Sala não encontrado");
    }
    return { message: "Sala deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar sala:", error);
    throw error;
  }
}

module.exports = {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
