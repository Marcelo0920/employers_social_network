const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


const User = require('../../models/Usuario');



//route POST api/users
//@desc register route
//access PUBLIC

router.post('/', [
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('apellido', 'El apellido es requerido').not().isEmpty(),
    check('ci', 'Tu carnet de identidad es ncesesario para validarte uwu').not().isEmpty(),
    check('correo', 'Por favor incluye una dirección válida de email').isEmail(),
    check('password', 'La contraseña debe tener al menos 7 caracteres :o').isLength({min: 7})
], 
async(req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        console.log('error here');
        return res.status(400).json({errors: errors.array()});
    }

    const {nombre, correo, password, ci, apellido} = req.body;

    try{
        //Check if user exists
        let user = await User.findOne({correo});

        if(user){
            return res.status(400).json({errors: [{msg: 'Este usuario ya existe 🤔'}]});
        }

        //filling the user model with data
        user = new User({
            nombre, 
            correo,
            password,
            ci,
            apellido
        })

        
        //Encrypting the pass
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Returning jsonwebToken
        const payload = {
            user: {
                id: user.id
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

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;