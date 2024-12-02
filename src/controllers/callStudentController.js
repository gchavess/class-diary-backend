const callStudentService = require("../services/callStudentService");

async function getCallStudents(req, res) {
  try {
    const callStudents = await callStudentService.getAllCallStudents();
    res.json(callStudents);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar estudantes" });
  }
}

async function createCallStudent(req, res) {
  const { date, student_id, present } = req.body;

  if (!student_id) {
    return res
      .status(400)
      .json({ message: "O campo 'student_id' é obrigatório" });
  }

  try {
    const newCallStudent = await callStudentService.createCallStudent(
      date,
      student_id,
      present
    );
    res.status(201).json(newCallStudent);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar estudante" });
  }
}

async function updateCallStudent(req, res) {
  const { id } = req.params;
  const { date, student_id, present } = req.body;

  if (!date) {
    return res.status(400).json({ message: "O campo 'date' é obrigatório" });
  }

  if (!student_id) {
    return res
      .status(400)
      .json({ message: "O campo 'student_id' é obrigatório" });
  }

  if (present === null || present === undefined) {
    return res.status(400).json({ message: "O campo 'present' é obrigatório" });
  }

  try {
    const updatedCallStudent = await callStudentService.updateCallStudent(
      id,
      date,
      student_id,
      present
    );
    res.json(updatedCallStudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function deleteCallStudent(req, res) {
  const { id } = req.params;
  try {
    const result = await callStudentService.deleteCallStudent(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getCallStudents,
  createCallStudent,
  updateCallStudent,
  deleteCallStudent,
};
