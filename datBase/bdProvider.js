const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lilia5069',
    database: 'user'
});

module.exports = pool;