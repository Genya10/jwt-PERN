const {Pool} = require("pg");

const pool = new Pool({
    user:"",
    password:"",
    host:"",
    port:"",
    database:"",
})

module.exports = pool;