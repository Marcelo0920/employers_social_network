const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const Empresa = require('../../models/Empresa');



//route POST api/empresas
//@desc register route
//access PUBLIC

router.post('/', [
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('correo', 'Por favor incluye una dirección válida de email').isEmail(),
    check('password', 'La contraseña debe tener al menos 7 caracteres :o').isLength({min: 7}),
    check('descripcion', 'Che pibe y la descripción de tu empresa').not().isEmpty(),
    check('ubicacion', 'Por favor introduce la ubicación de tu empresa').not().isEmpty()
],
async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {nombre, correo, telefono, password, descripcion, ubicacion, twitter, facebook, instagram, web} = req.body;

    try {
        //check if the bussiness exists
        let empresa = await Empresa.findOne({correo});

        if(empresa){
            return res.status(400).json({errors: [{msg: 'Esta empresa ya existe 🤔'}]});
        }

        //filling the bussiness model with data
        empresa = new Empresa({
            nombre,
            correo,
            telefono,
            password,
            descripcion,
            ubicacion,
            twitter,
            facebook,
            instagram,
            web
        })

        //encrypting the pass
        const salt = await bcrypt.genSalt(10);

        empresa.password = await bcrypt.hash(password, salt);

        await empresa.save();

        //Returning jsonwebtoken
        const payload = {
            empresa: {
                id: empresa.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 360000
            },
            (err, token) => {
                if(err){
                    throw err;
                }
                res.json({token});
            }
        )

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;