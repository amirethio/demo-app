require("dotenv").config();
const mysql = require("mysql2/promise");

const database = mysql.createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});


// asyncronous quary excution function
async function quary(sql , params) {
const [rows] =  await database.execute(sql ,params);
return rows    
}



module.exports = database;
