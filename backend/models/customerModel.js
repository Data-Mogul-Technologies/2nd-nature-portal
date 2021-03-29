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
    db.query("INSERT INTO Customer SET ?", [data], (err, results) => {             
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
    db.query("UPDATE customer SET first_name = ?, last_name = ?, address = ?, city = ?, zip_code = ?, mobile_phone = ?,office_phone = ?,home_phone = ?,email = ?, hear_about_us = ?, prospect_date = ?, actual_date = ? WHERE customer_id = ?",
     [data.first_name,data.last_name, data.address, data.city, data.zip_code, data.mobile_phone, data.office_phone, data.home_phone, data.email, data.hear_about_us, data.prospect_date, data.actual_date,  id], (err, results) => {             
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