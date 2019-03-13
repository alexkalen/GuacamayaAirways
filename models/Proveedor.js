const Sequelize = require("sequelize");
const db = require("../config/database");

// Modelo de Proveedor
const Proveedor = config.define(
  "Proveedor",
  {
    nombre: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        notEmpty: true
      }
    },
    preciokm: {
      type: sequelize.INTEGER,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    tiempoRes: {
      type: sequelize.INTEGER,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Proveedor;
