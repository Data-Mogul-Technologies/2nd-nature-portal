// import express
import express from "express";
 
// import function from controller
import { showCustomers, showCustomerById, allBusiness, allCustomerTypes,allState, createCustomer, updateCustomer, deleteCustomer, allSportTypes, allCustomerStatusTypes } from "../controllers/Customer.js";
import {showConsultants, showConsultantById, createConsultant,updateConsultant,deleteConsultant, allConsultantStatusTypes} from "../controllers/consultant.js" 
// init express router
const router = express.Router();


/*----------------------------Customer and Associates Routers------------------------- */
// Get All Customer
router.get('/Customers', showCustomers);

// Get Sport Types
router.get('/SportTypes', allSportTypes);

// Get Customer Status Types
router.get('/StatusTypes', allCustomerStatusTypes);


//Get Customer Business
router.get('/Business', allBusiness);

// Get Customer Types
router.get('/CustomerTypes', allCustomerTypes);

// Get State Types
router.get('/State', allState);
 
// Get Single Customer
router.get('/Customers/:id', showCustomerById);
 
// Create New Customer
router.post('/Customers', createCustomer);
 
// Update Customer
router.put('/Customers/:id', updateCustomer);
 
// Delete Customer by id
router.delete('/Customers/:id', deleteCustomer);

/*--------------------------------End Customer Routers--------------------------*/







/*--------------------------------Consultant Routers-----------------------------*/

//Get All Consultant
router.get('/Consultants',showConsultants);

// Get Single Consultant
router.get('/Consultants/:id', showConsultantById);
 
// Create New Consultant
router.post('/Consultants', createConsultant);
 
// Update Consultant
router.put('/Consultants/:id', updateConsultant);
 
// Delete Consultant by id
router.delete('/Consultant/:id', deleteConsultant);

// Get Consultant Status Types
router.get('/ConsultantStatusTypes', allConsultantStatusTypes);
 
// export default router
export default router;