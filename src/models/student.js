const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Student = sequelize.define(
  "Student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    n1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    n2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    n3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "rooms",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },

  {
    tableName: "students",
    timestamps: false,
  }
);

module.exports = Student;
