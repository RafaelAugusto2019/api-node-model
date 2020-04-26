var utilsQuery = require("../utils/querysDB.js")
var connectionDB = require("../config/conectionDB.js")

function userAuthenticationRepository(user, password){    
    return new Promise( (resolve, reject) => {
        try {
            connectionDB.query(utilsQuery.consultaCredenciais,
            [user,password],
            function(err, results){
                if(results.length == 0){
                    resolve(422)
                }else{
                    resolve(200)
                }
            })
        } catch (err) {
            resolve({ 'Error': err })
        } finally{
            console.log("Fechando conexão com BD!")
            connectionDB.end
        }

    })
}


module.exports = userAuthenticationRepository 





    