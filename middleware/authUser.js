const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function(req, res, next){
    //get token from header
    const token = req.header('x-auth-token');

    //check if token doesn't exists
    if(!token){
        return res.status(401).json({
            msg: 'Autorización denegada, no hay token'
        })
    }

    //verify token
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({msg: "El token no es válido >:("})
    }
}