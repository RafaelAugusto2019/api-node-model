var userAuthentication = require("../controller/authentication.js")
var teste = require("../controller/teste.js")
var { validJWT } = require("../service/jwt.js")

async function middleJWTAutorization(req, res, next){
    if (await validJWT(req.header('x-auth-token'))) 
        next()

    res.status(401).json({"Status": 'Você NÃO tem acesso a esse endpoint' })
}

module.exports = function(server){
 
    server.get('/login', (req,res) =>{ 
        userAuthentication(req, res)
    })

    server.get('/testeMiddle', middleJWTAutorization , (req, res)=>{
        teste(req, res) 
    }) 
 
}


