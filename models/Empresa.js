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
        required: true,
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
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true
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