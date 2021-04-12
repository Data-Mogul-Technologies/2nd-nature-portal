import {getServiceType, getServiceTypeById, insertServiceType, updateServiceTypeById, deleteServiceTypeById,
getServiceStatus,getServiceStatusById,insertServiceStatus,updateServiceStatusById,deleteServiceStatusById,
getCustServ, getCustServById} from "../models/serviceModel.js"

//Get All Service
export const allServiceType = (req, res) => {
    getServiceType((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single Service
export const showServiceTypeById = (req, res) => {
    getServiceTypeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Service
export const createServiceType = (req, res) => {
    const data = req.body;
    insertServiceType(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Service
export const updateServiceType = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateServiceTypeById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Service
export const deleteServiceType = (req, res) => {
    const id = req.params.id;
    deleteServiceTypeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


/* -------------- Service Status--------------*/

//Get All Service Status
export const allServiceStatus = (req, res) => {
    getServiceStatus((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single Service Status
export const showServiceStatusById = (req, res) => {
    getServiceStatusById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Service Status
export const createServiceStatus = (req, res) => {
    const data = req.body;
    insertServiceStatus(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Service Status
export const updateServiceStatus = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateServiceStatusById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Service Status
export const deleteServiceStatus = (req, res) => {
    const id = req.params.id;
    deleteServiceStatusById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//view Cust serv ALL
//Get All Service
export const allCustServ = (req, res) => {
    getCustServ((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single Service
export const showCustServById = (req, res) => {
    getCustServById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


