// import connection
import db from "../config/database.js";
 
// Get All Customers
export const getCustomers = (result) => {
    db.query("SELECT * FROM customers", (err, results) => {             
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
    db.query("SELECT * FROM customers WHERE customer_id = ?", [id], (err, results) => {             
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
    db.query("INSERT INTO Customers SET ?", [data], (err, results) => {             
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
    db.query("UPDATE customers SET customer_name = ?, customer_email = ? WHERE customer_id = ?", [data.customer_name, data.customer_email, id], (err, results) => {             
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
    db.query("DELETE FROM customers WHERE customer_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}