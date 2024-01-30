const {Pool} = require("pg");

const pool = new Pool({
    user:"postgres",
    password:"16082013",
    host:"localhost",
    port:"5432",
    database:"auth",
});

module.exports = pool;