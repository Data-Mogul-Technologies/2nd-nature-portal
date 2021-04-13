import db from "../config/database.js";



/*--------------------------------Customer Service Type Payment-----------------------------*/
// Get All CustPayment
export const getCustPayment = (result) => {
    db.query("select customer.first_name," +
    " customer.customer_id,"+
    " customer.last_name," +
    " customer_service_type_payment.customer_service_type_payment_id,"+
    " service_type.name as 'serviceName',"+
    " customer_service_type_payment.date,"+
    " customer_service_type_payment.amount,"+
    " payment_source.name as 'paymentSource',"+
    " customer_service_type_payment.confirmation_num,"+
    " payment_status.name as 'PaymentStatus'"+
    " from customer_service_type"+
    " join customer on customer.customer_id = customer_service_type.customer_id"+
    " join service_type on service_type.service_type_id = customer_service_type.service_type_id"+
    " join customer_service_type_payment on customer_service_type_payment.customer_service_type_id = customer_service_type.customer_service_type_id"+
    " join payment_source on payment_source.payment_source_id = customer_service_type_payment.payment_source_id"+
    " join payment_status on payment_status.payment_status_id = customer_service_type_payment.payment_status_id order by actual_date desc"
    , (err, results) => {             
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
    db.query("select customer.first_name," +
    " customer.customer_id,"+
    " customer.last_name," +
    " service_type.name as 'serviceName',"+
    " customer_service_type_payment.date,"+
    " customer_service_type_payment.amount,"+
    " payment_source.name as 'paymentSource',"+
    " customer_service_type_payment.confirmation_num,"+
    " payment_status.name as 'PaymentStatus'"+
    " from customer_service_type"+
    " join customer on customer.customer_id = customer_service_type.customer_id"+
    " join service_type on service_type.service_type_id = customer_service_type.service_type_id"+
    " join customer_service_type_payment on customer_service_type_payment.customer_service_type_id = customer_service_type.customer_service_type_id"+
    " join payment_source on payment_source.payment_source_id = customer_service_type_payment.payment_source_id"+
    " join payment_status on payment_status.payment_status_id = customer_service_type_payment.payment_status_id where customer_service_type_payment.customer_service_type_payment_id = ?", [id], (err, results) => {             
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
    db.query("UPDATE customer_service_type_payment SET payment_status_id = ?, date = ?, amount = ?, payment_source_id = ?, confirmation_num = ? WHERE customer_service_type_payment_id = ?",
     [data.payment_status_id, data.date, data.amount,data.payment_source_id,data.confirmation_num,  id], (err, results) => {             
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
    db.query("select customer.first_name, "+
    " customer.customer_id,"+
    " registration_payment.registration_payment_id,"+
    " customer.last_name,"+
    " event.name as 'eventName',"+
    " event_type.name as 'eventType',"+
    " registration_payment.date as DateMade,"+
    " registration_payment.amount,"+
    " payment_source.name as 'paymentSource',"+
    " registration_payment.confirmation_num,"+
    " payment_status.name as 'PaymentStatus'"+
    " from registration"+
    " join customer on customer.customer_id = registration.customer_id"+
    " join registration_payment on registration_payment.registration_id = registration.registration_id"+
    " join event on event.event_id = registration.event_id"+
    " join event_type on event_type.event_type_id = event.event_type_id"+
    " join payment_source on payment_source.payment_source_id = registration_payment.payment_source_id"+
    " join payment_status on payment_status.payment_status_id = registration_payment.payment_status_id", (err, results) => {             
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
    db.query("select customer.first_name, "+
    " customer.customer_id,"+
    " customer.last_name,"+
    " registration_payment.registration_payment_id,"+
    " event.name as 'eventName',"+
    " event_type.name as 'eventType',"+
    " registration_payment.date,"+
    " registration_payment.amount,"+
    " payment_source.name as 'paymentSource',"+
    " registration_payment.confirmation_num,"+
    " payment_status.name as 'PaymentStatus'"+
    " from registration"+
    " join customer on customer.customer_id = registration.customer_id"+
    " join registration_payment on registration_payment.registration_id = registration.registration_id"+
    " join event on event.event_id = registration.event_id"+
    " join event_type on event_type.event_type_id = event.event_type_id"+
    " join payment_source on payment_source.payment_source_id = registration_payment.payment_source_id"+
    " join payment_status on payment_status.payment_status_id = registration_payment.payment_status_id where registration_payment.registration_payment_id = ?", [id], (err, results) => {             
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
    db.query("UPDATE registration_payment SET payment_status_id = ?, date = ?, amount = ?, payment_source_id = ?, confirmation_num = ?  WHERE registration_payment_id = ?",
    [data.payment_status_id, data.date, data.amount,data.payment_source_id,data.confirmation_num,   id], (err, results) => {             
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



//Pending Payments
export const getPendingPayment = (result) => {
    db.query("select customer.first_name as `FirstName`, customer.last_name as `LastName`, business.name as `BusinessName`," +
    "service_type.name as Service, payment_status.name as Status from customer" +
    " join customer_service_type on customer.customer_id = customer_service_type.customer_id" +
    " join service_type on customer_service_type.service_type_id = service_type.service_type_id" +
    " join customer_service_type_payment on customer_service_type.customer_service_type_id = customer_service_type_payment.customer_service_type_id" +
    " join business on business.business_id = customer.business_id join payment_status " +
    " on customer_service_type_payment.payment_status_id = payment_status.payment_status_id join payment_source" +
    " on customer_service_type_payment.payment_source_id = payment_source.payment_source_id where payment_status.payment_status_id =3" +
    " Union" +
    " select customer.first_name as `FirstName`, customer.last_name as `LastName`, business.name as `BusinessName`," +
    " event_type.name as `Event Type`, payment_status.name as Status" +
    " from customer" +
    " join registration on registration.customer_id = customer.customer_id" +
    " join registration_payment on registration_payment.registration_id = registration.registration_id" +
    " join business on business.business_id = customer.business_id" +
    " join payment_status on registration_payment.payment_status_id = payment_status.payment_status_id" +
    " join payment_source on registration_payment.payment_source_id = payment_source.payment_source_id" +
    " join event on registration.event_id = event.event_id" +
    " join event_type on event.event_type_id = event_type.event_type_id" +
    " where payment_status.payment_status_id = 3", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//get total pending payments
export const getTotalPendingPayment = (result) => {
    db.query(" select count(*) total from(select customer.first_name as `FirstName`, customer.last_name as `LastName`, business.name as `BusinessName`," +
    "service_type.name as Service, payment_status.name as Status from customer" +
    " join customer_service_type on customer.customer_id = customer_service_type.customer_id" +
    " join service_type on customer_service_type.service_type_id = service_type.service_type_id" +
    " join customer_service_type_payment on customer_service_type.customer_service_type_id = customer_service_type_payment.customer_service_type_id" +
    " join business on business.business_id = customer.business_id join payment_status " +
    " on customer_service_type_payment.payment_status_id = payment_status.payment_status_id join payment_source" +
    " on customer_service_type_payment.payment_source_id = payment_source.payment_source_id where payment_status.payment_status_id =3" +
    " Union" +
    " select customer.first_name as `FirstName`, customer.last_name as `LastName`, business.name as `BusinessName`," +
    " event_type.name as `Event Type`, payment_status.name as Status" +
    " from customer" +
    " join registration on registration.customer_id = customer.customer_id" +
    " join registration_payment on registration_payment.registration_id = registration.registration_id" +
    " join business on business.business_id = customer.business_id" +
    " join payment_status on registration_payment.payment_status_id = payment_status.payment_status_id" +
    " join payment_source on registration_payment.payment_source_id = payment_source.payment_source_id" +
    " join event on registration.event_id = event.event_id" +
    " join event_type on event.event_type_id = event_type.event_type_id" +
    " where payment_status.payment_status_id = 3) total", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}