const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'name',
    database:'node-complete',
    password:'Sumanth@123'
});

module.exports=pool.promise();