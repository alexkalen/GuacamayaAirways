const Sequelize = require("sequelize");
const db = require("../config/database");

// Modelo de Producto
const Compra = db.define(
  "Compra",
  {
    metodo: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    monto: {
      type: sequelize.INTEGER,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    fecha: {
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
