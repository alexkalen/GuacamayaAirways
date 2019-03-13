const Sequelize = require("sequelize");
const db = require("../config/database");

// Modelo de Cliente
const Cliente = config.define(
  "Cliente",
  {
    Nombre: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        notEmpty: true
      }
    },
    Apellido: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    Direccion: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        notEmpty: true
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Cliente;
