const Sequelize = required('sequelize');
const db = require('../config/database');

const Vuelo = db.define('vuelo', {
    fecha: {
        type: Sequelize.DATE
    },
    estado: {
        type: Sequelize.STRING
    },
    mat_avion: {
        type: Sequelize.STRING
    },
    hora_salida: {
        type: Sequelize.TIME
    }
})