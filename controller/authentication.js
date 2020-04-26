var userAuthenticationRepository = require("../repository/authenticationRepository.js")

async function userAuthentication(req, res){

    const status = await userAuthenticationRepository(req.header('user'), req.header('password'))
                                                   
    switch (status) {
        case 200:
                res.status(200).json({"Status": "Com sucesso!" })
            break;
        case 422:
                res.status(422).json({"Status": "Com falha!" })
            break;
        default:
                res.status(503).json({"Error": "Erro no servidor" })
    }
       
}

module.exports = userAuthentication

