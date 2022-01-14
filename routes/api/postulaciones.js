const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/authUser');

const Propuesta = require('../../models/Propuesta');
const Empresa = require('../../models/Empresa');
const Usuario = require('../../models/Usuario');
const Postulacion = require('../../models/Postulacion');



//route POST api/postulaciones
//@desc post a postulacion in Propuestas
//access private

router.post('/:id', [auth, [
    check('comentario', 'El comentario es requerido').not().isEmpty()
]],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const user = await Usuario.findById(req.user.id).select('-password');

        const newPostulacion = new Postulacion({
            comentario: req.body.comentario,
            empresa: req.body.empresa,
            empleado: user
        })

        const postulacion = await newPostulacion.save();

        res.json(postulacion);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//route DELETE api/postulacion/:id
//@desc DELETE postulacion by id
//access private
router.delete('/', auth, async(req, res) => {
    try {
        const postulacion = await Postulacion.findById(req.body.postulacion);

        if(!postulacion){
            return res.status(404).json({msg: 'Postulación no encontrada 😢'});
        }
        

        //Check if the user owns the postulacion
        if(postulacion.empleado.toString() != req.user.id){
            return res.status(401).json({msg: 'Este usuario no tiene autorización'});
        }

        await postulacion.remove();

        res.json({msg: 'Postulacion removida con éxito :D'});
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Postulación no encontrada 😔'});
        }

        res.status(500).send('Server Error');
    }
})

module.exports = router;