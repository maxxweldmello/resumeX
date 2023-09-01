const {createPool} = require('mysql');

const pool = createPool({
    host: 'localhost',
    database: 'resumebuilderdb',
    user: 'root',
    password: 'Root@1234$',
    connectionLimit: 10
});

pool.query(`select * from registertoresume`, (err,result,fields) => {
    if (err){
        return console.log(err);
    }
    return consoloe.log(result);
})

