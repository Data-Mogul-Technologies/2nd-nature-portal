// import express
import express from "express";
 
// import function from controller
import { showCustomers, showCustomerById, allBusiness, allServiceTypes,allState, createCustomer, updateCustomer, deleteCustomer, allSportTypes, allCustomerStatusTypes } from "../controllers/Customer.js";
import { showProfiles, showProfileslessDeets } from "../controllers/profile.js"

// init express router
const router = express.Router();
 
// Get All Customer
router.get('/Customers', showCustomers);

// Get Sport Types
router.get('/SportTypes', allSportTypes);

// Get Customer Status Types
router.get('/StatusTypes', allCustomerStatusTypes);

//Get Customer Business
router.get('/Business', allBusiness);

// Get Service Types
router.get('/ServiceTypes', allServiceTypes);

// Get Service Types
router.get('/State', allState);
 
// Get Single Customer
router.get('/Customers/:id', showCustomerById);
 
// Create New Customer
router.post('/Customers', createCustomer);
 
// Update Customer
router.put('/Customers/:id', updateCustomer);
 
// Delete Customer by id
router.delete('/Customers/:id', deleteCustomer);

//Get all profiles 
router.get('/Profiles', showProfiles)

//Get all profiles 
router.get('/ProfileslessDeets', showProfileslessDeets)

 
// export default router
export default router;