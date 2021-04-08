import db from "../config/database.js";



/*--------------------------------Customer Service Type Payment-----------------------------*/
// Get All CustPayment
export const getCustPayment = (result) => {
    db.query("SELECT * FROM customer_service_type_payment", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single CustPayment
export const getCustPaymentById = (id, result) => {
    db.query("SELECT * FROM customer_service_type_payment WHERE customer_service_type_payment_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert CustPayment to Database
export const insertCustPayment = (data, result) => {
    db.query("INSERT INTO customer_service_type_payment SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update CustPayment to Database
export const updateCustPaymentById = (data, id, result) => {
    db.query("UPDATE customer_service_type_payment SET payment_status_id = ?, date = ?, amount = ?, payment_source_id = ?, confirmation_num = ?, customer_service_type_id = ?  WHERE customer_service_type_payment_id = ?",
     [data.payment_status_id, data.date, data.amount,data.payment_source_id,data.confirmation_num, data.customer_service_type_id,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete CustPayment to Database
export const deleteCustPaymentById = (id, result) => {
    db.query("DELETE FROM customer_service_type_payment WHERE customer_service_type_payment_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
/*--------------------------------Registration Payment-----------------------------*/

// Get All Registration Payment
export const getRegistrationPayment = (result) => {
    db.query("SELECT * FROM registration_payment", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Registration Payment
export const getRegistrationPaymentById = (id, result) => {
    db.query("SELECT * FROM registration_payment WHERE registration_payment_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Registration Payment to Database
export const insertRegistrationPayment = (data, result) => {
    db.query("INSERT INTO registration_payment SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Registration Payment to Database
export const updateRegistrationPaymentById = (data, id, result) => {
    db.query("UPDATE registration_payment SET payment_status_id = ?, date = ?, amount = ?, payment_source_id = ?, confirmation_num = ?, registration_id = ?  WHERE customer_service_type_payment_id = ?",
    [data.payment_status_id, data.date, data.amount,data.payment_source_id,data.confirmation_num, data.registration_id,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Registration Payment to Database
export const deleteRegistrationPaymentById = (id, result) => {
    db.query("DELETE FROM registration_payment WHERE registration_payment_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/*--------------------------------Payment Status-----------------------------*/
// Get All Payment Status
export const getPaymentStatus = (result) => {
    db.query("SELECT * FROM payment_status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Payment Status
export const getPaymentStatusById = (id, result) => {
    db.query("SELECT * FROM payment_status WHERE payment_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Payment Status to Database
export const insertPaymentStatus = (data, result) => {
    db.query("INSERT INTO payment_status SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Payment Status to Database
export const updatePaymentStatusById = (data, id, result) => {
    db.query("UPDATE payment_status SET name = ? WHERE payment_status_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Payment to Database
export const deletePaymentStatusById = (id, result) => {
    db.query("DELETE FROM payment_status WHERE payment_status_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

/*--------------------------------Payment Source-----------------------------*/

// Get All Payment Source
export const getPaymentSource = (result) => {
    db.query("SELECT * FROM payment_source", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Payment Source
export const getPaymentSourceById = (id, result) => {
    db.query("SELECT * FROM payment_source WHERE payment_source_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Payment Source to Database
export const insertPaymentSource = (data, result) => {
    db.query("INSERT INTO payment_source SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Payment Source to Database
export const updatePaymentSourceById = (data, id, result) => {
    db.query("UPDATE payment_source SET name = ? WHERE payment_source_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Payment Source to Database
export const deletePaymentSourceById = (id, result) => {
    db.query("DELETE FROM payment_source WHERE payment_source_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}