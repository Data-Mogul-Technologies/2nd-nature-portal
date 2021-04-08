import db from "../config/database.js";



// Get All Consultants
export const getConsultants = (result) => {
    db.query("SELECT * FROM sport_consultant", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Customer
export const getConsultantById = (id, result) => {
    db.query("SELECT * FROM sport_consultant WHERE sport_consultant_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Consultant to Database
export const insertConsultant = (data, result) => {
    db.query("INSERT INTO sport_consultant SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Consultant to Database
export const updateConsultantById = (data, id, result) => {
    db.query("UPDATE sport_consultant SET first_name = ?, last_name = ?, address = ?, city = ?, zip_code = ?,phone = ?,alt_phone = ?,email = ?, start_date = ?, end_date = ?, comments = ? WHERE sport_consultant_id = ?",
     [data.first_name,data.last_name, data.address, data.city, data.zip_code, data.phone, data.alt_phone, data.email, data.start_date, data.end_date, data.comments,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Consultant to Database
export const deleteConsultantById = (id, result) => {
    db.query("DELETE FROM sport_consultant WHERE sport_consultant_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 


/*--------------Consultant Status------------*/
//Get Consultant Status Types
export const getConsultantStatusTypes = (result) => {
    db.query("SELECT * FROM sport_consultant_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single ConsultantStatus
export const getConsultantStatusById = (id, result) => {
    db.query("SELECT * FROM sport_consultant_status WHERE sport_consultant_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert ConsultantStatus to Database
export const insertConsultantStatus = (data, result) => {
    db.query("INSERT INTO sport_consultant_status SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update ConsultantStatus to Database
export const updateConsultantStatusById = (data, id, result) => {
    db.query("UPDATE sport_consultant_status SET name = ? WHERE sport_consultant_status_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete ConsultantStatus to Database
export const deleteConsultantStatusById = (id, result) => {
    db.query("DELETE FROM sport_consultant_status WHERE sport_consultant_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}