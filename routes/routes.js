module.exports = function(server){

    server.get('/', function(req, res, next){       
        res.json({
            "status": "OK"
        })
    })
    
 }


