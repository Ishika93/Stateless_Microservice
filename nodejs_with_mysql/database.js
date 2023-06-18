const { 
    creatpool
 } = require('mysql');

 const pool = creatpool({
    host:"localhost",
    user: "root",
    password: "",
    database: "test",
    connectionLimit: 10

 })

 pool.query('select * from journals', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
 })