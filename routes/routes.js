var userAuthentication = require("../controller/authentication.js")
var teste = require("../controller/teste.js")
var { validJWT } = require("../service/jwt.js")

async function middleJWTAutorization(req, res, next){
    if (await validJWT(req.header('x-auth-token'))) 
        next()

    res.status(401).json({"Error": 'You do not have acess in this service'})
}

module.exports = function(server){
 
    server.get('/login', (req,res) =>{ 
        userAuthentication(req, res)
    })

    // Before use this service you have to authenticate  
    server.get('/testeMiddle', middleJWTAutorization , (req, res)=>{
        teste(req, res) 
    }) 
 
}


