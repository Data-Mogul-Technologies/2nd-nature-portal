import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MumboJumbo#9',
  database: '2NPortal'
});
 
export default db;