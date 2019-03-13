const Sequelize = require("sequelize");
const db = require("../config/database");

//Modelo de Mantenimiento

const Mantenimiento = db.define(
    "Mantenimieto",
    {
        matricula: {
            primaryKey: true,
            type: Sequelize.String,
            allowNull: false,
            unique: true
        },
        fecha_mant: {
            type: Sequelize.String,
            allowNull: false,
        },
        fecha_listo: {
            type: Sequelize.String,
            allowNull: false,
        },
        tipo: {
            type: Sequelize.String,
            allowNull: false,
        },
        estado_mant: {
            type: Sequelize.String,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Mantenimieno;