var jwt = require('jsonwebtoken');
var { PAYLOAD } = require('../utils/constantes.js')
var { PRIVATE_KEY } = require('../utils/constantes.js')

function generateJWT (){
    return new Promise(resolve =>{
        jwt.sign( PAYLOAD, PRIVATE_KEY, { algorithm: 'HS256' }, function(err, token) {
            if(err){
                console.log('Error')
            }

            resolve(token)
        })
    })
}

function validJWT (token){
    return new Promise( function(resolve, reject) {
        jwt.verify(token, PRIVATE_KEY, function(err, decoded) {
            if (err) resolve(false)
            
            console.log(decoded)
            resolve(true)
        }); 
    })
}

module.exports = { generateJWT, validJWT}