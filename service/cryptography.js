const crypto = require('crypto')
const algorithm_AES_256 = 'aes-256-ctr';
const secret_AES_256 = 'Password used to generate key';
const secretHash = 'abcdefg';

/**
 * Function to make hash in sha256 algorithm
 * 
 * @param {*} planText The text that will make a hash
 * 
 * @returns The hash
 */
function hashGerate(planText){
    
    let hash = crypto.createHmac('sha256', secretHash)
                   .update(planText)
                   .digest('hex');
      
    return hash
}

/**
 * Function to encrypt some text using algorithm AES_256
 * 
 * @param {*} planText The text that will encrypt
 * 
 * @returns The encrypted text
 */
function crypGerateAES_256(planText){
    let cipher = crypto.createCipher(algorithm_AES_256, secret_AES_256)
    return cryptoText = cipher.update(planText, 'utf8', 'hex') 
}

/**
 * Function to decipher using algorithm AES_256
 * 
 * @param {*} cryptoText The encrypt text that will decipher
 * 
 * @returns The plan text
 */
function crypDecodeAES_256(cryptoText){
    let decipher = crypto.createDecipher(algorithm_AES_256, secret_AES_256)
    return planText = decipher.update(cryptoText, 'hex', 'utf8')
}

module.exports = {
    hashGerate,
    crypGerateAES_256,
    crypDecodeAES_256
}
