const mysql = require('mysql');



var conmysql = function () {
    console.log('O fox eh incel doente')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'plasmastorm49',
        database: 'project_lab'
    })
}

module.exports = function () {
    console.log('Mysql Carregado')
    return conmysql
}
