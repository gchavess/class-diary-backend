const CallStudent = require("../models/callStudent");

async function getAllCallStudents() {
  try {
    return await CallStudent.findAll();
  } catch (error) {
    console.error("Erro ao buscar chamadas de estudantes:", error);
    throw error;
  }
}

async function getCallsByStudentAndDate(studentId, date) {
  try {
    return await CallStudent.findAll({
      where: {
        student_id: studentId,
        date,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar chamadas:", error);
    throw error;
  }
}

async function createCallStudent(date, student_id, present) {
  try {
    return await CallStudent.create({ date, student_id, present });
  } catch (error) {
    console.error("Erro ao criar chamada de estudante:", error);
    throw error;
  }
}

async function updateCallStudent(id, date, student_id, present) {
  try {
    const [updatedRows] = await CallStudent.update(
      { date, student_id, present },
      { where: { id } }
    );
    if (updatedRows === 0) {
      throw new Error("Chamada de estudante não encontrado");
    }
    return await CallStudent.findByPk(id);
  } catch (error) {
    console.error("Erro ao atualizar chamada de estudante:", error);
    throw error;
  }
}

async function deleteCallStudent(id) {
  try {
    const deletedRows = await CallStudent.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error("Chamada de estudante não encontrado");
    }
    return { message: "Chamada de estudante deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar chamada de estudante:", error);
    throw error;
  }
}

module.exports = {
  getAllCallStudents,
  createCallStudent,
  updateCallStudent,
  deleteCallStudent,
  getCallsByStudentAndDate,
};
