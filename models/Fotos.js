const mongoose = require('mongoose');

const FotoSchema = new mongoose.Schema({
    descripcion: {
        type: String
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'empresas'
    }
})

module.exports = Foto = mongoose.model('foto', FotoSchema);