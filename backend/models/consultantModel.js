import db from "../config/database.js";



// Get All Consultants
export const getConsultants = (result) => {
    db.query("select sport_consultant.first_name,"+
    " sport_consultant.sport_consultant_id,"+
    " sport_consultant.last_name,"+
    " sport_consultant.address,"+
    " sport_consultant.city,"+
    " sport_consultant.comments,"+
    " sport_consultant.zip_code,"+
    " sport_consultant.phone,"+
    " sport_consultant.alt_phone,"+
    " sport_consultant.email,"+
    " sport_consultant.start_date,"+
    " sport_consultant.end_date,"+
    " sport_consultant_status.name as StatusName"+
    " from sport_consultant"+
    " join sport_consultant_status on sport_consultant_status.sport_consultant_status_id = sport_consultant.sport_consultant_status_id ", (err, results) => {             
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
    db.query("select sport_consultant.first_name,"+
    " sport_consultant.last_name,"+
    " sport_consultant.address,"+
    " sport_consultant.city,"+
    " sport_consultant.comments,"+
    " state.name as StateName,"+
    " sport_consultant.zip_code,"+
    " sport_consultant.phone,"+
    " sport_consultant.alt_phone,"+
    " sport_consultant.email,"+
    " sport_consultant.start_date,"+
    " sport_consultant.end_date,"+
    " sport_consultant_status.name as StatusName"+
    " from sport_consultant"+
    " join state on state.state_id = sport_consultant.state_id"+
    " join sport_consultant_status on sport_consultant_status.sport_consultant_status_id = sport_consultant.sport_consultant_status_id where sport_consultant_id = ?", [id], (err, results) => {             
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
    db.query("UPDATE sport_consultant SET first_name = ?, last_name = ?, address = ?, city = ?, zip_code = ?,phone = ?,alt_phone = ?,email = ?, start_date = ?, end_date = ?, comments = ?, state_id = ?, sport_consultant_status_id = ? WHERE sport_consultant_id = ?",
     [data.first_name,data.last_name, data.address, data.city, data.zip_code, data.phone, data.alt_phone, data.email, data.start_date, data.end_date, data.comments, data.state_id, data.sport_consultant_status_id,  id], (err, results) => {             
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



// Insert Consultant to Cust
export const insertCustToConsult = (data, result) => {
    db.query("INSERT INTO sport_consultant_customer SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
