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


export const getCustServ = (result) => {
    db.query(  "select customer.customer_id," +
    " customer.first_name,"+
    " customer.last_name,"+
    " customer_service_type.customer_service_type_id,"+
    " customer_service_type.service_type_id,"+
    " service_type.service_type_id,"+
    " service_type.name as 'ServiceName'," +
    " service_status.service_status_id,"+
    " service_status.name as 'StatusName'"+
    " from customer_service_type"+
    " join customer on  customer.customer_id = customer_service_type.customer_id"+
    " join service_type on service_type.service_type_id = customer_service_type.service_type_id"+
     " join service_status on service_status.service_status_id = customer_service_type.service_status_id", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single ServiceType
export const getCustServById = (id, result) => {
    db.query("select customer.customer_id," +
    " customer.first_name,"+
    " customer.last_name,"+
    " customer_service_type.customer_service_type_id,"+
    " customer_service_type.service_type_id,"+
    " service_type.service_type_id,"+
    " service_type.name as 'ServiceName'," +
    " service_status.service_status_id,"+
    " service_status.name as 'StatusName'"+
    " from customer_service_type"+
    " join customer on  customer.customer_id = customer_service_type.customer_id"+
    " join service_type on service_type.service_type_id = customer_service_type.service_type_id"+
     " join service_status on service_status.service_status_id = customer_service_type.service_status_id where customer_service_type.customer_service_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}


// Update ServiceType to Database
export const updateCustServStatById = (data, id, result) => {
    db.query("UPDATE customer_service_type SET  service_status_id = ?, service_type_id = ? WHERE customer_service_type_id = ?",
     [data.service_status_id, data.service_type_id,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}