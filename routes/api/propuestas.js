const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/authEmpresa');


const Propuesta = require('../../models/Propuesta');



//route POST api/propuesta
//@desc Create propuesta
//access private

router.post('/', [auth, [
    check('nombre', 'El nombre de la propuesta es necesario').not().isEmpty(),
    check('puesto', 'Es necesario poner un puesto en la oferta').not().isEmpty(),
    check('descripcion', 'Es necesario una descripción del puesto de trabajo').not().isEmpty(),
    check('experiencia', 'Indique la experiencia que necesita tener el postulante al empleo').not().isEmpty(),
    check('habilidades', 'Es necesario poner el tipo de habilidades deseadas para el puesto').not().isEmpty(),
    check('salario', 'No te olvides de poner un salario tentativo al puesto de la oferta').not().isEmpty(),
]],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {nombre, puesto, descripcion, experiencia, habilidades, salario, area} = req.body;

    try {
      // const empresa = await Empresa.findById(req.empresa.id).select('-password');

        const newPropuesta = new Propuesta({
            nombre,
            puesto,
            descripcion,
            experiencia,
            habilidades,
            salario,
            area,
            empresa: req.empresa.id
        })

        const oferta = await newPropuesta.save();

        res.json(oferta);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})


//route GET api/propuesta
//@desc GET all propuestas
//access private

router.get('/', async(req, res) => {
    try {
        const propuestas = await Propuesta.find().sort({date: -1});
        res.json(propuestas);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//route GET api/propuesta/:id
//@desc GET propuesta by id
//access private
router.get('/:id', async(req, res) => {
    try {
        const propuesta = await Propuesta.findById(req.params.id);

        if(!propuesta){
            return res.status(404).json({msg: 'Oferta laboral no encontrada 😢'});
        }

        res.json(propuesta);

    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Oferta laboral no encontrada 😢'});
        }
        res.status(500).send('Server Error');
    }
})


//route DELETE api/propuesta/:id
//@desc DELETE propuesta by id
//acess private
router.delete('/:id', auth, async(req, res) => {
    try {
        const propuesta = await Propuesta.findById(req.params.id);

        if(!propuesta){
            return res.status(404).json({msg: 'Oferta laboral no encontrada 😢'});
        }

        //Check if the user owns the oferta
        if(propuesta.empresa.toString() !== req.empresa.id){
            return res.status(401).json({msg: 'Usuario no autorizado 😒'});
        }

        await propuesta.remove();

        res.json({msg: 'Oferta laboral removida con éxito 🤑👌'})

    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Oferta laboral no encontrada 😢'});
        }
        res.status(500).send('Server Error');
    }
})


module.exports = router;