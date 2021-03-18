// import express
import express from "express";
 
// import function from controller
import { showCustomers, showCustomerById, createCustomer, updateCustomer, deleteCustomer } from "../controllers/Customer.js";
 
// init express router
const router = express.Router();
 
// Get All Customer
router.get('/Customers', showCustomers);
 
// Get Single Customer
router.get('/Customers/:id', showCustomerById);
 
// Create New Customer
router.post('/Customers', createCustomer);
 
// Update Customer
router.put('/Customers/:id', updateCustomer);
 
// Delete Customer by id
router.delete('/Customers/:id', deleteCustomer);
 
// export default router
export default router;