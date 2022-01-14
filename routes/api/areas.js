const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authEmpresa');

const Area = require('../../models/Area');


// POST api/area
//@desc post un area 
//access private

router.post('/', auth, async(req, res) => {
    try {
        const newArea = new Area({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        })

        const area = await newArea.save();
        res.json(area);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;