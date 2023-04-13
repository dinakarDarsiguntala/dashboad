
var express = require('express');
const config = require("./db");
var cors = require('cors')
var app = express();
app.use(express.json())
var bodyParser = require("body-parser"); 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())



app.use(function (req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
  next();  
  });  
  // app.use(bodyParser.urlencoded(extended , true ));

app.get('/srini', function (req, res) {

    var sql = require("mssql");
app.use(cors())
    // config for your database
    // var config = {
    //     user: 'Admindemo',
    //     password: 'test',
    //     server: 'localhost',
    //     database: 'test',
    //     synchronize: true,
       
    //     trustServerCertificate: true,

    // };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from usr_user', function (err, recordset) {


            if (err) console.log(err)

         
            res.send(recordset
                );

        });
    });
});
  

app.post('/insert', function (req, res) {

  var sql = require("mssql");
app.use(cors())
  // config for your database
  // var config = {
  //   user: 'Admindemo',
  //   password: 'test',
  //   server: 'localhost',
  //   database: 'test',
  //   synchronize: true,
     
  //     trustServerCertificate: true,

  // };

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request()
    //   let FirstName=request.query.body.first_name
    //   let lastName=request.query.body.last_name

    //   let q="INSERT INTO my_first_table (first_name, last_name) VALUES("+ FirstName +","+lastName+")";
   request.input('first_name',sql.VarChar.first_name)
    .input('last_name',sql.VarChar.last_name)
      // query to the database and get the records
    //   request.execute('SPinserting', function (err, recordset) {
        .query(`insert into my_first_table (first_name,last_name) values ('${req.body.first_name}','${req.body.last_name}')`, function (err, recordset) {
            // request.query(q ,function (err, recordset) {


          if (err) console.log(err)

          res.send(recordset);
          res.end();

      });
  });
});

      



app.post('/Signup', function (req, res) {

  var sql = require("mssql");
app.use(cors())
  // config for your database
  // var config = {
  //   user: 'Admindemo',
  //   password: 'test',
  //   server: 'localhost',
  //   database: 'test',
  //   synchronize: true,
     
  //     trustServerCertificate: true,

  // };

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request()
    //   let FirstName=request.query.body.first_name
    //   let lastName=request.query.body.last_name

    //   let q="INSERT INTO my_first_table (first_name, last_name) VALUES("+ FirstName +","+lastName+")";
   request.input('usr_user_id',sql.VarChar.usr_user_id)
   .input('usr_user_email',sql.VarChar.usr_user_email)
    .input('usr_user_name',sql.VarChar.usr_user_name)
    .input('usr_password',sql.VarChar.usr_password)
      // query to the database and get the records
    //   request.execute('SPinserting', function (err, recordset) {
        .query(`insert into usr_user (usr_user_email,usr_user_name,usr_password) values ('${req.body.usr_user_email}','${req.body.usr_user_name}','${req.body.usr_password}')`, function (err, recordset) {
            // request.query(q ,function (err, recordset) {


          if (err) console.log(err)

          res.send(recordset);
          res.end();

      });
  });
});


app.post('/login', function (req, res) {

  var sql = require("mssql");
app.use(cors())
  // config for your database
  // var config = {
  //   user: 'Admindemo',
  //   password: 'test',
  //   server: 'localhost',
  //   database: 'test',
  //   synchronize: true,
     
  //     trustServerCertificate: true,

  // };

  // connect to your database
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request()
    //   let FirstName=request.query.body.first_name
    //   let lastName=request.query.body.last_name

    //   let q="INSERT INTO my_first_table (first_name, last_name) VALUES("+ FirstName +","+lastName+")";
   request.query(`select TOP 1* from usr_user where usr_user_email='${req.body.usr_user_email}' and usr_password='${req.body.usr_password}'`, function (err, recordset) {
            // request.query(q ,function (err, recordset) {


          if (err) console.log(err)

          res.send(recordset);
          res.end();

      });
  });
});

      

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


