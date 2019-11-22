module.exports = function(server){
    
    server.route('/')
        .get((req, res) => { res.json({"status": "OK"}) })
    
        
 }


