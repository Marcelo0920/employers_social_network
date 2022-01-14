const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo :{
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    cover: {
        type: String
    },
    genero: {
        type: String
    },
    ubicacion: {
        type: String
    },
    website: {
        type: String
    },
    facebook: {
        type: String,
        default: "https://www.facebook.com/"
    },
    twitter: {
        type: String,
        default: "https://twitter.com/"
    },
    instagram: {
        type: String,
        default: "https://www.instagram.com/"
    },
    estudios: [
        {
            nombre: {
                type: String
            },
            instituto: {
                type: String
            }
        }
    ],
    ci: {
        type: Number,
        required: true,
        unique: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: Boolean
    },
    experiencias: [
        {
            puesto: {
                type: String
            },
            tiempo: {
                type: Number
            }
        }
    ],
    habilidades: [
        {
            tipo: {
                type: String
            }
        }
    ]
})

module.exports = User = mongoose.model('user', UserSchema);