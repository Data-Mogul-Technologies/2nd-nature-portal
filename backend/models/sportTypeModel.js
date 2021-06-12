// import connection
import db from "../config/database.js";
//Get Sport Types
export const getSportTypes = (result) => {
    db.query("SELECT * FROM sport_type", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single SportTypes
export const getSportTypesId = (id, result) => {
    db.query("SELECT * FROM sport_type WHERE sport_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert SportTypes to Database
export const insertSportTypes = (data, result) => {
    db.query("INSERT INTO sport_type SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update SportTypes to Database
export const updateSportTypesById = (data, id, result) => {
    db.query("UPDATE sport_type SET name = ? WHERE sport_type_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete SportTypes to Database
export const deleteSportTypesById = (id, result) => {
    db.query("DELETE FROM sport_type WHERE sport_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
