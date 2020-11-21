const port = 5002

const express = require('express')
const server = express()


server.listen(port, function(){
    try {
        console.log("Server is running!")
    } catch (error) {
        console.log("Error - Server isn't running!")
    }
})

module.exports = server