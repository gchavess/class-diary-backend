const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const CallStudent = sequelize.define(
  "CallStudent",
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "students",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    present: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "call_students",
    timestamps: false,
  }
);

module.exports = CallStudent;
