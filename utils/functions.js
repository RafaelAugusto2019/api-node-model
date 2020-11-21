async function headerSplit(req){
    //valoresType -> tipo da criptografia
    //valores-> informações do header
    const [valoresType, valores] = req.headers.authorization.split(' ')
    
    let header = new Buffer.from(valores, 'base64').toString('utf8')

    return [user,password] = await header.split(':')
}

module.exports = {
    headerSplit
}