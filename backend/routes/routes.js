// import express
import express from "express";
 
// import function from controller
import {showCustomers, showCustomerById, allState, createCustomer, updateCustomer, deleteCustomer, 
allCustomerStatusTypes, showCustomerStatusById, createCustomerStatus, updateCustomerStatus, deleteCustomerStatus,
allCustomerTypes, showCustomerTypeById, createCustomerType, updateCustomerType, deleteCustomerType,
sortingCustomer} from "../controllers/Customer.js";


import {showConsultants, showConsultantById, createConsultant,updateConsultant,deleteConsultant, 
allConsultantStatusTypes, showConsultantStatusById, createConsultantStatus, updateConsultantStatus, deleteConsultantStatus} from "../controllers/consultant.js" 

import {showPaymentStatus, showPaymentStatusById, createPaymentStatus, updatePaymentStatus,deletePaymentStatus,
showPaymentSource, showPaymentSourceById, createPaymentSource, updatePaymentSource, deletePaymentSource,
showCustPayment, showCustPaymentById, createCustPayment, updateCustPayment, deleteCustPayment,
showRegistrationPayment, showRegistrationPaymentById, createRegistrationPayment, updateRegistrationPayment, deleteRegistrationPayment, showPendingPayment} from "../controllers/payment.js"


import {showEvents, showEventById, createEvent, updateEvent,deleteEvent,
showEventStatus,showEventStatusById,createEventStatus,updateEventStatus,deleteEventStatus,
showEventType, showEventTypeById, createEventType, updateEventType,deleteEventType, showUpcoming} from "../controllers/event.js"

import {allBusiness, showBusinessById, createBusiness, updateBusiness, deleteBusiness} from "../controllers/business.js"

import {allSportTypes, showSportTypesId, createSportTypes, updateSportTypes, deleteSportTypes} from "../controllers/sportType.js"

import {allServiceType, showServiceTypeById, createServiceType, updateServiceType, deleteServiceType,
allServiceStatus, showServiceStatusById, createServiceStatus, updateServiceStatus, deleteServiceStatus,
allCustServ, showCustServById} from "../controllers/service.js"

import {allProfileStatus, showProfileStatusById, createProfileStatus, updateProfileStatus, deleteProfileStatus, 
createProfile,showProfiles, showATProfileTypes, showDMD_profile_types, showATProfileById, updateATProfile, showDmdProfileById, updateDmdProfile,
showProfileById, updateProfile, updateProfileStatusCustomer, showPendingProfiles} from "../controllers/profile.js"

import {showFeedback,showFeedbackById, createFeedback, updateFeedback, deleteFeedback} from "../controllers/feedback.js"

import {createRegistration, createCustServ} from '../controllers/registration.js'

import {allProspectDate, allYrRetRateConsult, allLastYrRetRateConsult, allCurrYrRetRateConsult,
allRetRateCompany, allEventAttendeesById, allAnnualPaymentCust, allATReportResult,
allDMDReportResult, allCountBusSport, allCountATReport, allCountHowHear, allCountRecHelp,
allCustFeedback, allConsultantCust} from '../controllers/report.js'

// init express router
const router = express.Router();

router.post('/Registration', createRegistration);
router.post('/CustServ', createCustServ);

// /------------------Report Routes----------/
router.get('/ProspectDate', allProspectDate )
router.get('/YrRetRateConsult', allYrRetRateConsult)
router.get('/LastYrRetRateConsult', allLastYrRetRateConsult)
router.get('/CurrYrRetRateConsult', allCurrYrRetRateConsult )
router.get('/RetRateCompany', allRetRateCompany )
router.get('/EventAttendees/:id', allEventAttendeesById )
router.get('/AnnualPaymentCust', allAnnualPaymentCust )
router.get('/ATReportResult',allATReportResult )
router.get('/DMDReportResult', allDMDReportResult )
router.get('/CountBusSport', allCountBusSport )
router.get('/CountATReport', allCountATReport )
router.get('/CountHowHear', allCountHowHear )
router.get('/CountRecHelp', allCountRecHelp )
router.get('/CustFeedback', allCustFeedback )
router.get('/ConsultantCust', allConsultantCust )

// /------------------End Report Routes----------/

/*----------------------------Customer and Associates Routers------------------------- */
// Get All Customer
router.get('/Customers', showCustomers);

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

//sort Customer
router.get('/CustomerByDate', sortingCustomer);

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



/*--------------------------------Consultant Routers End-----------------------------*/

/*---------------------Consultant Status Routers--------------------*/
// Get Consultant Status Types
router.get('/ConsultantStatus', allConsultantStatusTypes);

// Get Single Consultant Status
router.get('/ConsultantStatus/:id', showConsultantStatusById);
 
// Create New Payment Status
router.post('/ConsultantStatus', createConsultantStatus);
 
// Update Payment Status
router.put('/ConsultantStatus/:id', updateConsultantStatus);
 
// Delete Payment Status by id
router.delete('/ConsultantStatus/:id', deleteConsultantStatus);

/*---------------------Consultant Status Routers End--------------------*/
/*--------------------------------Customer Service Type Payment Routers-----------------------------*/
//Get All Customer Service Type Payment
router.get('/CustPayment',showCustPayment);

// Get Single Customer Service Type Payment
router.get('/CustPayment/:id', showCustPaymentById);
 
// Create New Customer Service Type Payment
router.post('/CustPayment', createCustPayment);
 
// Update Customer Service Type Payment
router.put('/CustPayment/:id', updateCustPayment);
 
// Delete Customer Service Type Payment by id
router.delete('/CustPayment/:id', deleteCustPayment);
/*--------------------------------Customer Servie Type Routers End-----------------------------*/



/*--------------------------------Registration Payment Routers-----------------------------*/
//Get All Registration Payment
router.get('/RegistrationPayment',showRegistrationPayment);

// Get SingleRegistration Payment
router.get('/RegistrationPayment/:id', showRegistrationPaymentById);
 
// Create New Registration Payment
router.post('/RegistrationPayment', createRegistrationPayment);
 
// Update Registration Payment
router.put('/RegistrationPayment/:id', updateRegistrationPayment);
 
// Delete Registration Payment by id
router.delete('/RegistrationPayment/:id', deleteRegistrationPayment);
/*--------------------------------Registration Payment Routers End-----------------------------*/



/*--------------------------------Payment Status Routers-----------------------------*/
//Get All Payment Status
router.get('/PaymentStatus',showPaymentStatus);

// Get Single Payments Status
router.get('/PaymentStatus/:id', showPaymentStatusById);
 
// Create New Payment Status
router.post('/PaymentStatus', createPaymentStatus);
 
// Update Payment Status
router.put('/PaymentStatus/:id', updatePaymentStatus);
 
// Delete Payment Status by id
router.delete('/PaymentStatus/:id', deletePaymentStatus);
/*--------------------------------Payment Status Routers End-----------------------------*/

/*--------------------------------Payment Source Routers-----------------------------*/
//Get All Payment Source
router.get('/PaymentSource',showPaymentSource);

// Get Single Payments Source
router.get('/PaymentSource/:id', showPaymentSourceById);
 
// Create New Payment Source
router.post('/PaymentSource', createPaymentSource);
 
// Update Payment Source
router.put('/PaymentSource/:id', updatePaymentSource);
 
// Delete Payment Source by id
router.delete('/PaymentSource/:id', deletePaymentSource);

/*--------------------------------Payment Source Routers End-----------------------------*/


/*--------------------------------Event Routers-----------------------------*/
//Get All Events
router.get('/Events',showEvents);

// Get Single Events
router.get('/Events/:id', showEventById);

// // Get Customers for a Single Events
// router.get('/EventCustomers/:id', showEventCustomers);
 
// Create New Events
router.post('/Events', createEvent);
 
// Update Events
router.put('/Events/:id', updateEvent);
 
// Delete Events by id
router.delete('/Events/:id', deleteEvent);

//Upcoming Events
router.get('/UpcomingEvents',showUpcoming); 


/*--------------------------------Event Routers End-----------------------------*/

/*--------------------------------Event Status Routers-----------------------------*/
//Get All Event Status
router.get('/EventStatus',showEventStatus);

// Get Single Events Status
router.get('/EventStatus/:id', showEventStatusById);
 
// Create New Events Status
router.post('/EventStatus', createEventStatus);
 
// Update Events Status
router.put('/EventStatus/:id', updateEventStatus);
 
// Delete EEvent Status by id
router.delete('/EventStatus/:id', deleteEventStatus);

/*--------------------------------Event Status Routers End-----------------------------*/

/*--------------------------------Event Type Routers-----------------------------*/
//Get All Event Type
router.get('/EventType',showEventType);

// Get Single Event Type
router.get('/EventType/:id', showEventTypeById);
 
// Create New Event Type
router.post('/EventType', createEventType);
 
// Update Events
router.put('/EventType/:id', updateEventType);
 
// Delete EventType by id
router.delete('/EventType/:id', deleteEventType);
/*--------------------------------Event Type Routers End-----------------------------*/



/*--------------------------------Business Routers -----------------------------*/
//Get Customer Business
router.get('/Businesses', allBusiness);

 // Get Single Business
router.get('/Businesses/:id', showBusinessById);
 
// Create New Business
router.post('/Businesses', createBusiness);
 
// Update Business
router.put('/Businesses/:id', updateBusiness);
 
// Delete Business by id
router.delete('/Business/:id', deleteBusiness);
/*--------------------------------Business Routers End-----------------------------*/

/*--------------------------------Sport Type Routers -----------------------------*/
// Get Sport Types
router.get('/Sports', allSportTypes);

 // Get Single Sports
 router.get('/Sports/:id', showSportTypesId);
 
 // Create New Sports
 router.post('/Sports', createSportTypes);
  
 // Update Sports
 router.put('/Sports/:id', updateSportTypes);
  
 //Delete Sports by id
 router.delete('/Sports/:id', deleteSportTypes);

/*--------------------------------Sport Type Routers End -----------------------------*/

/*-----------Customer Status ------------*/

// Get Customer Status Types
 router.get('/StatusTypes', allCustomerStatusTypes);

 // Get Single Sports
 router.get('/StatusTypes/:id', showCustomerStatusById);
 
 // Create New Sports
 router.post('/StatusTypes', createCustomerStatus);
  
 // Update Sports
 router.put('/StatusTypes/:id', updateCustomerStatus);
  
 //Delete Sports by id
 router.delete('/StatusTypes/:id', deleteCustomerStatus);
/*-----------Customer Status End ------------*/


/*-----------Customer Type ------------*/
// Get Customer Types
 router.get('/CustomerTypes', allCustomerTypes);

 // Get Single Sports
 router.get('/CustomerTypes/:id', showCustomerTypeById);
 
 // Create New Sports
 router.post('/CustomerTypes', createCustomerType);
  
 // Update Sports
 router.put('/CustomerTypes/:id', updateCustomerType);
  
 //Delete Sports by id
 router.delete('/CustomerTypes/:id', deleteCustomerType);

/*-----------Customer Type End ------------*/

/*-----------Service Type ------------*/
// Get Service Types
router.get('/ServiceType', allServiceType);

// Get Single Sports
router.get('/ServiceType/:id', showServiceTypeById);

// Create New Sports
router.post('/ServiceType', createServiceType);
 
// Update Sports
router.put('/ServiceType/:id', updateServiceType);
 
//Delete Sports by id
router.delete('/ServiceType/:id', deleteServiceType);
/*-----------Service Type End ------------*/

/*-----------Service Status ------------*/
// Get Service Status
router.get('/ServiceStatus', allServiceStatus);

// Get Single Service Status
router.get('/ServiceStatus/:id', showServiceStatusById);

// Create New Service Status
router.post('/ServiceStatus', createServiceStatus);
 
// Update Service Status
router.put('/ServiceStatus/:id', updateServiceStatus);
 
//Delete Service Status by id
router.delete('/ServiceStatus/:id', deleteServiceStatus);
/*-----------Service Status End ------------*/


/*----------------------------Profile Routers ------------------------- */

// Create New Profile
router.post('/Profiles', createProfile);

//Get all profiles 
router.get('/Profiles', showProfiles)

// Get Single Profile
router.get('/Profiles/:id', showProfileById);

//Get all profile types
router.get('/ATProfileTypes', showATProfileTypes)

//Get all dmd profile types
router.get('/dmdProfileTypes', showDMD_profile_types)

// //Get all PendingProfiles
// router.get('/PendingProfiles', showPendingProfiles)

// Update Profile 
router.put('/Profiles/:id', updateProfile)

// Update Profile 
router.put('/ProfileStatus4Customer/:id', updateProfileStatusCustomer)


/*----------------------------Profile Routers End------------------------- */

/*-----------Profile Status ------------*/
// Get Profile Status Types
router.get('/ProfileStatus', allProfileStatus);

// Get Single Profile Status
router.get('/ProfileStatus/:id', showProfileStatusById);

// Create New Profile Status
router.post('/ProfileStatus', createProfileStatus);
 
// Update Profile Status
router.put('/ProfileStatus/:id', updateProfileStatus);
 
//Delete Profile Status by id
router.delete('/ProfileStatus/:id', deleteProfileStatus);
/*-----------Profile Status End ------------*/

/*----------------------------Feedback Routers------------------------- */
// Get All Feedback
router.get('/Feedback', showFeedback);
 
// Get Single Customer
router.get('/Feedback/:id', showFeedbackById);
 
// Create New Customer
router.post('/Feedback', createFeedback);
 
// Update Customer
router.put('/Feedback/:id', updateFeedback);
 
// Delete Customer by id
router.delete('/Feedback/:id', deleteFeedback);

/*-----payments----*/
//pending payment
router.get('/PendingPayment', showPendingPayment);
/*----------------------------Feedback Routers End------------------------- */

/*--------------AT---------------------*/
// Get Single ATProfile Status
router.get('/ATProfile/:id', showATProfileById);

// Update ATProfile Status
router.put('/ATProfile/:id', updateATProfile);
/*--------------DMD---------------------*/

// Get Single DmdProfile Status
router.get('/DmdProfile/:id', showDmdProfileById);

// Update DmdProfile Status
router.put('/DmdProfile/:id', updateDmdProfile);

/*-----Pending Profles----*/
router.get('/PendingProfiles', showPendingProfiles);

/* -------Cust Serv ---------*/
router.get('/CustServ/', allCustServ)
router.get('/CustServ/:id', showCustServById)


/*------------------Report Routes----------*/
router.get('/ProspectDate', allProspectDate )
router.get('/YrRetRateConsult', allYrRetRateConsult)
router.get('/LastYrRetRateConsult', allLastYrRetRateConsult)
router.get('/CurrYrRetRateConsult', allCurrYrRetRateConsult )
router.get('/RetRateCompany', allRetRateCompany )
router.get('/EventAttendees/:id', allEventAttendeesById )
router.get('/AnnualPaymentCust', allAnnualPaymentCust )
router.get('/ATReportResult',allATReportResult )
router.get('/DMDReportResult', allDMDReportResult )
router.get('/CountBusSport', allCountBusSport )
router.get('/CountATReport', allCountATReport )
router.get('/CountHowHear', allCountHowHear )
router.get('/CountRecHelp', allCountRecHelp )
router.get('/CustFeedback', allCustFeedback )
router.get('/ConsultantCust/:id', allConsultantCust )


//export default router
export default router;
