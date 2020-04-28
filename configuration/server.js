const port = 5002

const express = require('express')
const server = express()


server.listen(port, function(){
    console.log("Server is running!!")
})

module.exports = server