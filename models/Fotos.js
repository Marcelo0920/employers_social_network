const mongoose = require('mongoose');

const FotoSchema = new mongoose.Schema({
    descripcion: {
        type: String
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'empresa'
    }
})

module.exports = Foto = mongoose.model('foto', FotoSchema);