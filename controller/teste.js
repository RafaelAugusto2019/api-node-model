var cryptography = require("../service/cryptography.js")

/**
 * Function test to authentication middle 
 * 
 * @param {*} req Request of express function - Consult header of request 
 * @param {*} res Response of express function - Send the response to client
 */
function simpleTest(req, res){

    let testCrypto = cryptography.crypGerateAES_256('Teste')

    res.status(200).json({
        "hash": cryptography.hashGerate('Teste'),
        "AES-256-Cryptografy": testCrypto,
        "AES-256-Decryptografy": cryptography.crypDecodeAES_256(testCrypto)
    }) 

}

module.exports = simpleTest 