function simpleTest(req, res){
    res.status(200).json({"Status": 'Você tem acesso a esse endpoint' })     
}

module.exports = simpleTest