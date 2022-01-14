const mongoose = require('mongoose');

const ContratoSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    salario: {
        type: Number,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'empresas'
    },
    empleado: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'users'
    }
})

module.exports = Contrato = mongoose.model('contrato', ContratoSchema);