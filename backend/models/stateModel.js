import db from "../config/database.js";
// Get Single Payment Status
export const getStateById = (id, result) => {
    db.query("SELECT * FROM state WHERE state_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Payment Status to Database
export const insertState = (data, result) => {
    db.query("INSERT INTO state SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Payment Status to Database
export const updateStateById = (data, id, result) => {
    db.query("UPDATE state SET name = ? WHERE state_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Payment to Database
export const deleteStateById = (id, result) => {
    db.query("DELETE FROM state WHERE state_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}