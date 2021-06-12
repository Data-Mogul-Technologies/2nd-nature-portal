// import connection
import db from "../config/database.js";
//Get Business
export const getBusiness = (result) => {
    db.query("SELECT * FROM business", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Business
export const getBusinessById = (id, result) => {
    db.query("SELECT * FROM business WHERE business_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Business to Database
export const insertBusiness = (data, result) => {
    db.query("INSERT INTO business SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Business to Database
export const updateBusinessById = (data, id, result) => {
    db.query("UPDATE business SET name = ? WHERE business_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Business to Database
export const deleteBusinessById = (id, result) => {
    db.query("DELETE FROM business WHERE business_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
