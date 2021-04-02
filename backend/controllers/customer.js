// Import function from Customer Model
import { getCustomers, getSportTypes, getStatusTypes, getBusiness, getCustomerType, getState, getCustomerById, insertCustomer, updateCustomerById, deleteCustomerById } from "../models/CustomerModel.js";
 
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
// Get All Sport Types
export const allSportTypes = (req, res) => {
    getSportTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Get All Business
export const allBusiness = (req, res) => {
    getBusiness((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

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

