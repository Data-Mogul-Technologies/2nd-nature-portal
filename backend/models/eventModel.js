import db from "../config/database.js";
// Get All Events
export const getEvents = (result) => {
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

// Get Single Event
export const getEventById = (id, result) => {
    db.query("SELECT event.*, state.name as state, event_type.name as event_type, event_status.name as event_status from event join state on event.state_id = state.state_id join event_type on event.event_type_id = event_type.event_type_id join event_status on event.event_status_id = event_status.event_status_id;", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

//get all customers for a single event 
export const getEventCustomers = (id, result) => {
    db.query("select customer.first_name as FirstName,"+
               " customer.last_name as LastName,"+
               " customer.mobile_phone,"+
               " customer.email,"+
               " payment_status.name as PaymentStatus,"+
               " customer.customer_id,"+
               " registration.registration_id,"+
               " registration.event_id,"+
               " registration.registration_id,"+
               " registration_payment.registration_payment_id"+
               " from registration"+
               " join event"+
               " on registration.event_id=event.event_id"+
               " join registration_payment"+
            " on registration.registration_id = registration_payment.registration_id"+
            " join payment_status"+
            " on registration_payment.payment_status_id = payment_status.payment_status_id"+
            " join customer"+
            " on registration.customer_id=customer.customer_id"+
            " where event.event_id = ?",
     [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


//get all events for a single consultant 
export const getEventsForConsultant = (id, result) => {
    db.query("select event.name as eventName," +
                " event.date as eventDate, "+
                " event.zip_code as zip_code," +
                " event_type.name as eventType,"+
                " event_status.name as event_status"+
                " from sport_consultant_event"+
                " join event on sport_consultant_event.event_id = event.event_id"+
                " join event_type on event.event_type_id = event_type.event_type_id"+
                " join event_status on event.event_status_id = event_status.event_status_id"+
                " where sport_consultant_id = ?"+
                " order by eventName",
     [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

 
// Insert Event to Database
export const insertEvent = (data, result) => {
    db.query("INSERT INTO event SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Event to Database
export const updateEventById = (data, id, result) => {
    db.query("UPDATE event SET name = ?, date = ?, address = ?,city = ?, zip_code = ?, comments = ?, event_status_id = ?, event_type_id = ?, state_id = ?  WHERE event_id = ?",
     [data.name,data.date, data.address, data.city, data.zip_code, data.comments,data.event_status_id,data.event_type_id, data.state_id,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Event to Database
export const deleteEventById = (id, result) => {
    db.query("DELETE FROM event WHERE event_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/*-------------------Event Status----------*/
//get all event status
export const getEventStatus = (result) => {
    db.query("SELECT * FROM event_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single event_status
export const getEventStatusById = (id, result) => {
    db.query("SELECT * FROM event_status WHERE event_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert event_status to Database
export const insertEventStatus = (data, result) => {
    db.query("INSERT INTO event_status SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update event_status to Database
export const updateEventStatusById = (data, id, result) => {
    db.query("UPDATE event_status SET name = ? WHERE event_status_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete event_status to Database
export const deleteEventStatusById = (id, result) => {
    db.query("DELETE FROM event_status WHERE event_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
/*-------------------Event Type----------*/

//get all event Type
export const getEventType = (result) => {
    db.query("SELECT * FROM event_type", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single event_Type
export const getEventTypeById = (id, result) => {
    db.query("SELECT * FROM event_type WHERE event_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert event_Type to Database
export const insertEventType = (data, result) => {
    db.query("INSERT INTO event_type SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert sport consultant event to Database
export const insertSportConsultantEvent = (data, result) => {
    db.query("insert into sport_consultant_event SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update event_Type to Database
export const updateEventTypeById = (data, id, result) => {
    db.query("UPDATE event_type SET name = ? WHERE event_type_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete event_status to Database
export const deleteEventTypeById = (id, result) => {
    db.query("DELETE FROM event_type WHERE event_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Upcoming Events
export const getUpcoming = (result) => {
    db.query("select  event.name as Name, event.date as Date, event.city as City," +
" state.name as State, event_status.name as Status, event_type.name as Type," +
" count(registration.event_id) as `HowManyAttendees`" +
" from event" +
" join event_status on event.event_status_id = event_status.event_status_id" +
" join event_type on event.event_type_id= event_type.event_type_id" +
" join state on event.state_id= state.state_id" +
" join registration on event.event_id=registration.event_id" +
" group by registration.event_id order by event.date desc;" , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


//Get Total Number of Upcoming Events
export const getTotalEvents = (result) => {
    db.query("select count(*) total from (select  event.name as Name, event.date as Date, event.city as City," +
" state.name as State, event_status.name as Status, event_type.name as Type," +
" count(registration.event_id) as `HowManyAttendees`" +
" from event" +
" join event_status on event.event_status_id = event_status.event_status_id" +
" join event_type on event.event_type_id= event_type.event_type_id" +
" join state on event.state_id= state.state_id" +
" join registration on event.event_id=registration.event_id" +
" group by registration.event_id order by event.date desc)Total;" , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
