// import connection
import db from "../config/database.js";
//Get ServiceType
export const getServiceType = (result) => {
    db.query("SELECT * FROM service_type", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single ServiceType
export const getServiceTypeById = (id, result) => {
    db.query("SELECT * FROM service_type WHERE service_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert ServiceType to Database
export const insertServiceType = (data, result) => {
    db.query("INSERT INTO service_type SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update ServiceType to Database
export const updateServiceTypeById = (data, id, result) => {
    db.query("UPDATE service_type SET name = ? WHERE service_type_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete ServiceType to Database
export const deleteServiceTypeById = (id, result) => {
    db.query("DELETE FROM service_type WHERE service_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/*---------Service Status-------------*/
//Get Service Status
export const getServiceStatus = (result) => {
    db.query("SELECT * FROM service_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Service Status
export const getServiceStatusById = (id, result) => {
    db.query("SELECT * FROM service_status WHERE service_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Service Status to Database
export const insertServiceStatus = (data, result) => {
    db.query("INSERT INTO service_status SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Service Status to Database
export const updateServiceStatusById = (data, id, result) => {
    db.query("UPDATE service_status SET name = ? WHERE service_status_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Service Status to Database
export const deleteServiceStatusById = (id, result) => {
    db.query("DELETE FROM service_status WHERE service_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}