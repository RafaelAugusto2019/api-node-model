var userAuthentication = require("../controller/authentication.js")

function middleJWTAutorization(req, res, next){

}

module.exports = function(server){
       
    server.get('/login', (req,res) =>{ 
        userAuthentication(req, res)
    })
  
 }


