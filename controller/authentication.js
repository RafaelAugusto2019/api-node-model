var userAuthenticationRepository = require("../repository/authenticationRepository.js")
var { generateJWT } = require("../service/jwt.js")

async function userAuthentication(req, res){

    const status = await userAuthenticationRepository(req.header('user'), req.header('password'))
                                                   
    switch (status) {
        case 200:
                const token = await generateJWT()
                res.status(200).json({"x-auth-token": token })
            break;
        case 422:
                res.status(422).json({"Status": "No authenticated" })
            break;
        default:
                res.status(503).json({"Error": "Erro no servidor" })
    }
       
}

module.exports = userAuthentication

