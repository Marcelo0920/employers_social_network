const mongoose = require('mongoose');

const PostulacionSchema = new mongoose.Schema({
    comentario: {
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

module.exports = Postulacion = mongoose.model('postulacion', PostulacionSchema);
