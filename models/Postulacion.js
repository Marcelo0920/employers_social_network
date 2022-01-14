const mongoose = require('mongoose');

const PostulacionSchema = new mongoose.Schema({
    comentario: {
        type: String,
        required: true
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'empresa'
    },
    empleado: {
        type: mongoose.Schema.Types.ObjectId,
        refers: 'user'
    }
})

module.exports = Postulacion = mongoose.model('postulacion', PostulacionSchema);
