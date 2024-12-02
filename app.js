const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const studentRoutes = require("./src/routes/studentRoutes");
const userRoutes = require("./src/routes/userRoutes");
const roomRoutes = require("./src/routes/roomRoutes");
const callStudentRoutes = require("./src/routes/callStudentRoutes");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use("/api/student", studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/call_student", callStudentRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
});

module.exports = app;
