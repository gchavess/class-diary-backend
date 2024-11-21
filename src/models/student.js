const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Student = sequelize.define(
  "Student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "students",
    timestamps: false,
  }
);

module.exports = Student;
