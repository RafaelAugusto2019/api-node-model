const port = 5001

const express = require('express')
const server = express()


server.listen(port, function(){
    console.log("Server is running!!")
})

module.exports = server