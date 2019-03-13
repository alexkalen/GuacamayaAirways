const Sequelize = required('sequelize');
const db = require('../config/database');

//Modelo de Vuelo
const Vuelo = db.define(
    "Vuelo", 
    {
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mat_avion: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    hora_salida: {
        type: Sequelize.TIME,
        allowNull: false
    }
});

module.exports = Vuelo;
