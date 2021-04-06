const mysql = require('mysql');
//const mysqlConnection = require('../database');

const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pfe_dgpfe'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return
    }else{
        console.log('DB is connected');
    }
});

module.exports=mysqlConnection;