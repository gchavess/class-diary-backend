const studentService = require("../services/studentService");
const callStudentService = require("../services/callStudentService");

async function getStudents(req, res) {
  try {
    const { roomId, date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "A data é obrigatória" });
    }

    const students = await studentService.getAllStudents(roomId);

    const studentsWithCalls = await Promise.all(
      students.map(async (student) => {
        const calls = await callStudentService.getCallsByStudentAndDate(
          student.id,
          date
        );
        return {
          ...student.dataValues,
          calls,
        };
      })
    );

    res.json(studentsWithCalls);
  } catch (error) {
    console.error("Erro ao buscar estudantes com chamadas:", error);
    res.status(500).json({ message: "Erro ao buscar estudantes com chamadas" });
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
