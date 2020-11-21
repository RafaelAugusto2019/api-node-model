var jwt = require('jsonwebtoken');
var { PAYLOAD } = require('../utils/constantes.js')
var { PRIVATE_KEY } = require('../utils/constantes.js')

/**
 * Function to gerate the JWT token
 * 
 * @returns Promise:
 *          Reject  -> Return the text explanation
 *          Resolve -> Return the JWT token
 */
function generateJWT (){
    return new Promise( (resolve, reject) =>{
        jwt.sign( PAYLOAD, PRIVATE_KEY, { algorithm: 'HS256' }, function(err, token) {
            if(err)
                reject('Error in gerate de JWT')
            
            resolve(token)
        })
    })
}

/**
 * Funtion to authenticate the JWT token
 * 
 * @param {*} token The JWT token
 * 
 * @returns Promise: 
 *          Reject  -> Return false
 *          Resolve -> Return true
 */
function validJWT (token){
    return new Promise( function(resolve, reject) {
        jwt.verify(token, PRIVATE_KEY, function(err, decoded) {
            if (err) 
                resolve(false)
            
            resolve(true)
        }); 
    })
}

module.exports = { generateJWT, validJWT}