const mysql = require("mysql2");
const { credentials } = require('./credentials')


exports.dbConnection = mysql.createConnection(credentials)