// Import function from Customer Model
import { getCustomers, getState, getCustomerById, insertCustomer, updateCustomerById, deleteCustomerById,
    getStatusTypes, getCustomerStatusById,insertCustomerStatus,updateCustomerStatusById,deleteCustomerStatusById,
    getCustomerType, getCustomerTypeById, insertCustomerType, updateCustomerTypeById, deleteCustomerTypeById,sortCustomers } from "../models/CustomerModel.js";
 
// Get All Customers
export const showCustomers = (req, res) => {
    getCustomers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    }); 
}



//Get State
export const allState = (req, res) => {
    getState((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Customer 
export const showCustomerById = (req, res) => {
    getCustomerById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Customer
export const createCustomer = (req, res) => {
    const data = req.body;
    insertCustomer(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Customer
export const updateCustomer = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCustomerById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Customer
export const deleteCustomer = (req, res) => {
    const id = req.params.id;
    deleteCustomerById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

/*---------------- Customer Status ---------------------*/


//Get All Customer Status Types
export const allCustomerStatusTypes = (req, res) => {
    getStatusTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single CustomerStatus
export const showCustomerStatusById = (req, res) => {
    getCustomerStatusById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New CustomerStatus
export const createCustomerStatus = (req, res) => {
    const data = req.body;
    insertCustomerStatus(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update CustomerStatus
export const updateCustomerStatus = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCustomerStatusById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete CustomerStatus
export const deleteCustomerStatus = (req, res) => {
    const id = req.params.id;
    deleteCustomerStatusById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
/*---------------- Customer Type ---------------------*/
//Get Customer Type
export const allCustomerTypes = (req, res) => {
    getCustomerType((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single CustomerType
export const showCustomerTypeById = (req, res) => {
    getCustomerTypeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New CustomerType
export const createCustomerType = (req, res) => {
    const data = req.body;
    insertCustomerType(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update CustomerType
export const updateCustomerType = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCustomerTypeById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete CustomerType
export const deleteCustomerType = (req, res) => {
    const id = req.params.id;
    deleteCustomerTypeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Sorting customers by date
export const sortingCustomer = (req, res) => {
    sortCustomers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}