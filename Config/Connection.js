require('dotenv').config();
const mysql = require('mysql');
const HOST = process.env.DATABASE_HOST;
const USER_NAME = process.env.DATABASE_USER_NAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const NAME = process.env.DATABASE_NAME;
const connect = mysql.createConnection({
    host: HOST,
    user: USER_NAME,
    password: PASSWORD,
    database: NAME
})
connect.connect((err) => {
    if (err) {
        //console.log(err);
        console.log("failed to connect mysql database..!!");
        return false;//JSON.stringify({ status: 400, message: "failed to connect mysql database..!!" });
    }
})
module.exports = connect;