import db from "../config/database.js";
// Get All Event
export const getEvents = (result) => {
    db.query("SELECT * FROM event", (err, results) => {             
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
    db.query("SELECT * FROM event WHERE event_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
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
    db.query("UPDATE event SET name = ?, date = ?, address = ?,city = ?, zip_code = ?, comments = ? WHERE event_id = ?",
     [data.name,data.date, data.address, data.city, data.zip_code, data.comments,  id], (err, results) => {             
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
    db.query("UPDATE event_status SET name = ? WHERE event_id = ?",
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