const Sequelize = require("sequelize");
const db = require("../config/database");

// Modelo de Cliente
const Aeropuerto = config.define(
  "Aeropuerto",
  {
     CodigoIata: {
      primaryKey:true,
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        notEmpty: true
      }
    },
    Ciudad: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        isNumeric: true,
        notEmpty: true
      }
    },
    
    Pais: {
      type: sequelize.STRING,
      allowNull: false,

      validate: {
        notEmpty: true
      }
    },
    tamPista:{
      type: sequelize.INTEGER,
      allowNull:false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Aeropuerto;
