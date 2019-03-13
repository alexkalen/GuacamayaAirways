const Sequelize = require("sequelize");
const db = require("../config/database");

// Modelo de Proveedor
const Proveedor = config.define(
  "Proveedor",
  {
    Nombre: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        notEmpty: true
      }
    },
    PrecioKm: {
      type: sequelize.INTEGER,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    TiempoRes: {
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
