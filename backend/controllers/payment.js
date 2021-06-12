import {getPaymentStatus, insertPaymentStatus, updatePaymentStatusById, deletePaymentStatusById,getPaymentStatusById,
getPaymentSource, insertPaymentSource, updatePaymentSourceById, deletePaymentSourceById, getPaymentSourceById,
getCustPayment, getCustPaymentById, insertCustPayment, updateCustPaymentById, deleteCustPaymentById,
getRegistrationPayment, getRegistrationPaymentById, insertRegistrationPayment, updateRegistrationPaymentById, deleteRegistrationPaymentById, getPendingPayment,
getTotalPendingPayment} from "../models/paymentModel.js"


/*--------------------------------Customer Service Type Payment-----------------------------*/
// Get All CustPayment
export const showCustPayment = (req, res) => {
    getCustPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single CustPayment
export const showCustPaymentById = (req, res) => {
    getCustPaymentById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New CustPayment
export const createCustPayment = (req, res) => {
    const data = req.body;
    insertCustPayment(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update CustPayment
export const updateCustPayment = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCustPaymentById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete CustPayment
export const deleteCustPayment = (req, res) => {
    const id = req.params.id;
    deleteCustPaymentById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
/*--------------------------------Registration Payment-----------------------------*/
// Get All Registration Payment
export const showRegistrationPayment = (req, res) => {
    getRegistrationPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single Registration Payment
export const showRegistrationPaymentById = (req, res) => {
    getRegistrationPaymentById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Registration Payment
export const createRegistrationPayment = (req, res) => {
    const data = req.body;
    insertRegistrationPayment(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Registration Payment
export const updateRegistrationPayment = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateRegistrationPaymentById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Registration Payment
export const deleteRegistrationPayment = (req, res) => {
    const id = req.params.id;
    deleteRegistrationPaymentById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
/*--------------------------------Payment Status-----------------------------*/
// Get All Payment Status
export const showPaymentStatus = (req, res) => {
    getPaymentStatus((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single payment Status
export const showPaymentStatusById = (req, res) => {
    getPaymentStatusById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Payment Status
export const createPaymentStatus = (req, res) => {
    const data = req.body;
    insertPaymentStatus(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Payment Status
export const updatePaymentStatus = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePaymentStatusById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Payment Status
export const deletePaymentStatus = (req, res) => {
    const id = req.params.id;
    deletePaymentStatusById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

/*--------------------------------Payment Source-----------------------------*/
// Get All Payment Source
export const showPaymentSource = (req, res) => {
    getPaymentSource((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single payment Source
export const showPaymentSourceById = (req, res) => {
    getPaymentSourceById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Payment Source
export const createPaymentSource = (req, res) => {
    const data = req.body;
    insertPaymentSource(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Payment Source
export const updatePaymentSource = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePaymentSourceById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Payment Source
export const deletePaymentSource = (req, res) => {
    const id = req.params.id;
    deletePaymentSourceById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

/*-------------------Pending Payments -----------*/
export const showPendingPayment = (req, res) => {
    getPendingPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

/*-------------------Total Pending Payments -----------*/
export const showTotalPendingPayment = (req, res) => {
    getTotalPendingPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
