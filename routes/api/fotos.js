const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authEmpresa');


const Foto = require('../../models/Fotos');
const Empresa = require('../../models/Empresa');


//route POST api/fotos
//@desc Create Foto
//access private
router.post('/', [auth,], async(req, res) => {
    try {
        const newFoto = new Foto({
            descripcion: req.body.descripcion,
            empresa: req.empresa.id
        })

        const foto = await newFoto.save();

        res.json(foto);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//route GET api/foto
//@desc GET all fotos
//access public
router.get('/', async(req, res) => {
    try {
        const fotos = await Foto.find().sort({date: -1});
        res.json({fotos});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//route GET api/foto/:id
//desc GET foto by id
//access public
router.get('/:id', async(req, res) => {
    try {
        const foto = await Foto.findById('req.params.id');

        if(!foto){
            return res.status(404).json({msg: 'Foto no encontrada :('});
        }
        res.json(foto);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//route DELETE api/foto/:id
//@desc DELETE foto by id
//access private
router.delete('/:id', auth, async(req, res) => {
    try {
        const foto = await Foto.findById(req.params.id);

        if(!foto){
            return res.status(404).json({msg: 'Foto no encontrada :('});
        }

        //check if the empresa owns the photo
        if(foto.empresa.toString() != req.empresa.id){
            return res.status(401).json({msg: 'Acción no autorizada'});
        }

        await foto.remove();
    } catch (err) {
        console.error(err.message);
        if(!err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Foto no encontrada :('});
        }
        res.status(500).send('Server Error');
    }
})


module.exports = router;