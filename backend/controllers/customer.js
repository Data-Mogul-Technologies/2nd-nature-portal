// Import function from Customer Model
import { getCustomers, getCustomerById, insertCustomer, updateCustomerById, deleteCustomerById } from "../models/CustomerModel.js";
 
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