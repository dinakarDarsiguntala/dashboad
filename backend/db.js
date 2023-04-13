var sql = require("mssql");

var config = {
    user: 'Admindemo',
    password: 'test',
    server: 'localhost',
    database: 'test',
    synchronize: true,
   
    trustServerCertificate: true,

};
module.exports=config;;