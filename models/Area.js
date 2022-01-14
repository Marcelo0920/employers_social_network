const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
})

module.exports = Area = mongoose.model('area', AreaSchema);