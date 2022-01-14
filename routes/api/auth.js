const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/authUser');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


const User = require('../../models/Usuario');
//const Bussiness = require('../../models/Bussiness);


//route GET api/auth
//@desc LOAD user from cookies
//access public
router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
})


//route POST api/auth
//@desc authenticate user & get token
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
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({errors: [{msg: "Credenciales inválidas"}]});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({errors: [{msg: 'Credenciales inválidas'}]});
        }

        //Returning jsonWebToken
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
                res.json({token})
            }
        )
    }catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
})

module.exports = router;