// import connection
import db from "../config/database.js";
 
// Get All Customers
export const getCustomers = (result) => {
    db.query("SELECT * FROM customer", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


//Get State
export const getState = (result) => {
    db.query("SELECT * FROM state", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Customer
export const getCustomerById = (id, result) => {
    db.query("SELECT * FROM customer WHERE customer_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Customer to Database
export const insertCustomer = (data, result) => {
    db.query("INSERT INTO customer SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Customer to Database
export const updateCustomerById = (data, id, result) => {
    db.query("UPDATE customer SET first_name = ?, last_name = ?, address = ?, city = ?, zip_code = ?, mobile_phone = ?,office_phone = ?,home_phone = ?,email = ?, hear_about_us = ?,how_can_help =?, prospect_date = ?, actual_date = ?, comments = ? WHERE customer_id = ?",
     [data.first_name,data.last_name, data.address, data.city, data.zip_code, data.mobile_phone, data.office_phone, data.home_phone, data.email, data.hear_about_us, data.how_can_help, data.prospect_date, data.actual_date, data.comments,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Customer to Database
export const deleteCustomerById = (id, result) => {
    db.query("DELETE FROM customer WHERE customer_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/*----------Customer Status------------*/
//Get Customer Status Types
export const getStatusTypes = (result) => {
    db.query("SELECT * FROM customer_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Get Single CustomerStatus
export const getCustomerStatusById = (id, result) => {
    db.query("SELECT * FROM customer_status WHERE customer_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert CustomerStatus to Database
export const insertCustomerStatus = (data, result) => {
    db.query("INSERT INTO customer_status SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update CustomerStatus to Database
export const updateCustomerStatusById = (data, id, result) => {
    db.query("UPDATE customer_status SET name = ? WHERE customer_status_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete CustomerStatus to Database
export const deleteCustomerStatusById = (id, result) => {
    db.query("DELETE FROM customer_status WHERE customer_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/*---------- Customer Type --------------*/

//Get Customer Type
export const getCustomerType = (result) => {
    db.query("SELECT * FROM customer_type", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single customer_type
export const getCustomerTypeById = (id, result) => {
    db.query("SELECT * FROM customer_type WHERE customer_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert customer_type to Database
export const insertCustomerType = (data, result) => {
    db.query("INSERT INTO customer_type SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update customer_type to Database
export const updateCustomerTypeById = (data, id, result) => {
    db.query("UPDATE customer_type SET name = ? WHERE customer_type_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete customer_type to Database
export const deleteCustomerTypeById = (id, result) => {
    db.query("DELETE FROM customer_type WHERE customer_type_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}