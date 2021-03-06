const mongoose = require('mongoose');

const PropuestaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    experiencia: {
        type: String,
        required: true,
    },
    habilidades: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'empresa'
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'area'
    }
})

module.exports = Propuesta = mongoose.model('propuesta', PropuestaSchema);