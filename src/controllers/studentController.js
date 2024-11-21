const studentService = require("../services/studentService");

async function getStudents(req, res) {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar estudantes" });
  }
}

async function createStudent(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }
  try {
    const newStudent = await studentService.createStudent(name);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar estudante" });
  }
}

async function updateStudent(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O campo 'name' é obrigatório" });
  }

  try {
    const updatedStudent = await studentService.updateStudent(id, name);
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
