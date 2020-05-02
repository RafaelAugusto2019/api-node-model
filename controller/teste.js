var cryptography = require("../service/cryptography.js")

function simpleTest(req, res){

    let testCrypto = cryptography.crypGerateAES_256('Teste')

    res.status(200).json({
        "hash": cryptography.hashGerate('Teste'),
        "AES-256-Cryptografy": testCrypto,
        "AES-256-Decryptografy": cryptography.crypDecodeAES_256(testCrypto)
    }) 

}

module.exports = simpleTest 