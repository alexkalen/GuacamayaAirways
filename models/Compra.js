const Sequelize = require("sequelize");
const db = require("../config/database");

// Modelo de Producto
const Compra = db.define(
  "Compra",
  {
    Metodo: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Monto: {
      type: sequelize.INTEGER,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    Fecha: {
      type: sequelize.DATE,
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

module.exports = Compra;
