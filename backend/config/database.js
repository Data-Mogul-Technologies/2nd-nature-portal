import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'dmtx2np.cqjc7y38s6or.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'DMTuh2021',
  database: 'DMTx2NP'
});
 
export default db;