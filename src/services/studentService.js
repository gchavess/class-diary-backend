const Student = require("../models/student");

async function getAllStudents() {
  try {
    return await Student.findAll();
  } catch (error) {
    console.error("Erro ao buscar estudantes:", error);
    throw error;
  }
}

async function createStudent(name) {
  try {
    return await Student.create({ name });
  } catch (error) {
    console.error("Erro ao criar estudante:", error);
    throw error;
  }
}

async function updateStudent(id, name) {
  try {
    const [updatedRows] = await Student.update({ name }, { where: { id } });
    if (updatedRows === 0) {
      throw new Error("Estudante não encontrado");
    }
    return await Student.findByPk(id);
  } catch (error) {
    console.error("Erro ao atualizar estudante:", error);
    throw error;
  }
}

async function deleteStudent(id) {
  try {
    const deletedRows = await Student.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new Error("Estudante não encontrado");
    }
    return { message: "Estudante deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar estudante:", error);
    throw error;
  }
}

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
