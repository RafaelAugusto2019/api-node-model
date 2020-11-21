/**
 * Function to split the header informations 
 * 
 * @param {*} req Request of express function - Consult header of request 
 * 
 * @returns Object with two positions User[0] and Password[1]
 */
async function headerSplit(req){
    //valoresType -> Type of encode
    //valores-> Values encoded
    const [valoresType, valores] = req.headers.authorization.split(' ')
    
    let header = new Buffer.from(valores, 'base64').toString('utf8')

    return [user,password] = await header.split(':')
}

module.exports = {
    headerSplit
}