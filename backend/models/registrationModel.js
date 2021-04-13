// import connection
import db from "../config/database.js";
//Get Registration
 
 //Insert into registration table with customer ID for an event 
export const insertRegistration = (data, result) => {
    db.query("INSERT INTO registration SET ?", [data], (err, results) => {             
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


export const getCustServ = (result) => {
    db.query("SELECT event.*, state.name as state, event_type.name as event_type, event_status.name as event_status from event join state on event.state_id = state.state_id join event_type on event.event_type_id = event_type.event_type_id join event_status on event.event_status_id = event_status.event_status_id;", 
    (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

