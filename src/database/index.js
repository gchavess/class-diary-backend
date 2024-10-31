const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "MySqL@2024#Strong!",
  database: "class-diary",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o MySQL estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao MySQL:", error.message);
  }
})();

module.exports = sequelize;
