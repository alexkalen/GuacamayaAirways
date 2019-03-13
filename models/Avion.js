const Sequelize = require("sequelize");
const db = require("../config/database");

//Modelo de Avion
const Avion = db.define(
    "Avion",
    {
        matricula: {
            primaryKey: true,
            type: Sequelize.String,
            allowNull: false,
            unique: true
        },
        dueno: {
            type: Sequelize.String,
            allowNull: false,
        },
        modelo: {
            type: Sequelize.String,
            allowNull: false,
        },
        estado: {
            type: Sequelize.String,
            allowNull: false,
        },
        mantenimiento: {
            type: Sequelize.String,
            allowNull: false,
        },
        estado: {
            type: Sequelize.String,
            allowNull: false,
        },
        empleados: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        origen: {
            type: Sequelize.String,
            allowNull: false,
        },
        destino: {
            type: Sequelize.String,
            allowNull: false,
        }, 
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Avion;