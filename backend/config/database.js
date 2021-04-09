import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'CoT-CIS4375-03',
  user: 'admin',
  password: 'DMT@uh2021',
  database: '2NPortal'
});
 
export default db;