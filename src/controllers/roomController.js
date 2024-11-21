const roomService = require("../services/roomService");

async function getRooms(req, res) {
  try {
    const rooms = await roomService.getAllRooms();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar salas" });
  }
}

async function createRoom(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }
  try {
    const newRoom = await roomService.createRoom(name);
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar sala" });
  }
}

async function updateRoom(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }

  try {
    const updatedRoom = await roomService.updateRoom(id, name);
    res.json(updatedRoom);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function deleteRoom(req, res) {
  const { id } = req.params;
  try {
    const result = await roomService.deleteRoom(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
