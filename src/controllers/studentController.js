const studentService = require("../services/studentService");

async function getStudents(req, res) {
  try {
    const { roomId } = req.query;
    const students = await studentService.getAllStudents(roomId);
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar estudantes" });
  }
}

async function createStudent(req, res) {
  const { name, n1, n2, n3, roomId } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }

  if (!n1) {
    return res.status(400).json({ message: "O campo 'n1' é obrigatório" });
  }

  if (!n2) {
    return res.status(400).json({ message: "O campo 'n2' é obrigatório" });
  }

  if (!n3) {
    return res.status(400).json({ message: "O campo 'n3' é obrigatório" });
  }

  if (!roomId) {
    return res.status(400).json({ message: "O campo 'roomId' é obrigatório" });
  }

  try {
    const newStudent = await studentService.createStudent(
      name,
      n1,
      n2,
      n3,
      roomId
    );
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar estudante" });
  }
}

async function updateStudent(req, res) {
  const { id } = req.params;
  const { name, n1, n2, n3 } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }

  if (!n1) {
    return res.status(400).json({ message: "O campo 'n1' é obrigatório" });
  }

  if (!n2) {
    return res.status(400).json({ message: "O campo 'n2' é obrigatório" });
  }

  if (!n3) {
    return res.status(400).json({ message: "O campo 'n3' é obrigatório" });
  }

  try {
    const updatedStudent = await studentService.updateStudent(
      id,
      name,
      n1,
      n2,
      n3
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function deleteStudent(req, res) {
  const { id } = req.params;
  try {
    const result = await studentService.deleteStudent(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
