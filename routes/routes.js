var userAuthentication = require("../controller/authentication.js")

var utilsQuery = require("../utils/querysDB.js")
var connectionDB = require("../config/conectionDB.js")

module.exports = function(server){
       
    server.get('/login', (req,res) =>{ 
        userAuthentication(req, res)
    })
  
 }


