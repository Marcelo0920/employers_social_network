const mongoose = require('mongoose');

const EmpresaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: Number,
    },
    tipo: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String
    },
    ubicacion: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    web: {
        type: String
    }
})


module.exports = Empresa = mongoose.model('empresa', EmpresaSchema);