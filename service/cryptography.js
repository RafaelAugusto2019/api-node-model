const crypto = require('crypto')

const algorithm_AES_256 = 'aes-256-ctr';

const secret_AES_256 = 'Password used to generate key';
const secretHash = 'abcdefg';

function hashGerate(planText){
    
    let hash = crypto.createHmac('sha256', secretHash)
                   .update(planText)
                   .digest('hex');
      
    return hash
}

//[START] aes-256-ctr
function crypGerateAES_256(planText){
    let cipher = crypto.createCipher(algorithm_AES_256, secret_AES_256)
    let cryptoText = cipher.update(planText, 'utf8', 'hex') 
    return cryptoText
}

function crypDecodeAES_256(cryptoText){
    let decipher = crypto.createDecipher(algorithm_AES_256, secret_AES_256)
    let planText = decipher.update(cryptoText, 'hex', 'utf8')
    return planText
}
//[FIM] aes-256-ctr

module.exports = {
    hashGerate,
    crypGerateAES_256,
    crypDecodeAES_256
}
