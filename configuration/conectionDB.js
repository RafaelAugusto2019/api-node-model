var mysql = require('mysql')

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '2047',
  database : 'teste_api_node'
})

try {
  connection.connect()
} catch (error) {
  console.log("Erro ao conectar com o banco de dados!")
  console.log(error)
}

module.exports = connection