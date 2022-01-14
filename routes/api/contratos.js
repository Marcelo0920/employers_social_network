const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authEmpresa');

const Propuesta = require('../../models/Propuesta');
const Contrato = require('../../models/Contrato');


//route POST api/contratos
//@desc post a contrato 
//access private

router.post('/:id', auth, async(req, res) => {
    try {
        const propuesta = await Propuesta.findById(req.params.id);
        
        const newContrato = new Contrato({
            salario: propuesta.salario,
            tipo: req.body.tipo,
            puesto: propuesta.puesto,
            empresa: propuesta.empresa,
            empleado: req.body.empleado
        })

        const contrato = await newContrato.save();

        res.json(contrato);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;