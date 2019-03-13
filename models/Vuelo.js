const Sequelize = required('sequelize');
const db = require('../config/database');

const Vuelo = db.define('vuelo', {
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
})