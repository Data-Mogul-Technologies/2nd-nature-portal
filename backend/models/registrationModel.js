// import connection
import db from "../config/database.js";
//Get Registration
 
// Insert Registration to Database
export const insertRegistration = (data, result) => {
    db.query("INSERT INTO Registration SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert Registration to Database
export const insertCustServ = (data, result) => {
    db.query("INSERT INTO customer_service_type SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
 
