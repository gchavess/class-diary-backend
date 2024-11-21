const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Room = sequelize.define(
  "Room",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "rooms",
    timestamps: false,
  }
);

module.exports = Room;
