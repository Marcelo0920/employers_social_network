const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/authEmpresa');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


const Empresa = require('../../models/Empresa');
//const Bussiness = require('../../models/Bussiness);


//route GET api/auth
//@desc LOAD empresa from cookies
//access public
router.get('/', auth, async(req, res) => {
    try {
        const empresa = await Empresa.findById(req.empresa.id).select('-password');
        res.json(empresa);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
})


//route POST api/auth
//@desc authenticate empresa & get token
//access public
router.post('/', [
    check('email', 'Se requiere su email para iniciar sesión 😔👌').isEmail(),
    check('password', 'No sea !#$ como quiere iniciar sesión sin su contraseña? 😒').exists()
],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        //Verify if user exists
        let empresa = await Empresa.findOne({email});

        if(!empresa){
            return res.status(400).json({errors: [{msg: "Credenciales inválidas"}]});
        }

        const isMatch = await bcrypt.compare(password, empresa.password);

        if(!isMatch){
            return res.status(400).json({errors: [{msg: 'Credenciales inválidas'}]});
        }

        //Returning jsonWebToken
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
                res.json({token})
            }
        )
    }catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
})

module.exports = router;