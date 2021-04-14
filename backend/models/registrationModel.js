// import connection
import db from "../config/database.js";
//Get Registration
 
 //Insert into registration table and registration payment set to default upaid with customer ID for an event 
export const insertRegistration = (data, result) => {
    db.query("INSERT INTO registration SET ? " 
            , [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const insertDefaultRegistrationPayment = (result) => {
    db.query("insert into registration_payment (payment_status_id, date, amount, payment_source_id, confirmation_num, registration_id)" +
    " values (2, curdate(), 0, 3, 000, (select registration_id from registration where registration_id = LAST_INSERT_ID())) ",
     (err, results) => {             
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

