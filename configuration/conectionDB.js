var mysql = require('mysql')

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '2047',
  database : 'teste_api_node'
})

try {
  connection.connect()
  console.log("DataBase connected!")
} catch (error) {
  console.log("Error - Trying to connect in the DataBase!")
  console.log(error)
}

module.exports = connection