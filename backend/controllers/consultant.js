import {getConsultants, getConsultantById, insertConsultant,  updateConsultantById, deleteConsultantById, 
    getConsultantStatusTypes, getConsultantStatusById, insertConsultantStatus, updateConsultantStatusById, deleteConsultantStatusById
} from "../models/consultantModel.js"

// Get All Consultants
export const showConsultants = (req, res) => {
    getConsultants((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// Get Single Consultant
export const showConsultantById = (req, res) => {
    getConsultantById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Consultant
export const createConsultant = (req, res) => {
    const data = req.body;
    insertConsultant(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Consultant
export const updateConsultant = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateConsultantById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Consultant
export const deleteConsultant = (req, res) => {
    const id = req.params.id;
    deleteConsultantById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}



/*------------Consultant Status------------*/
//Consultant Status 
export const allConsultantStatusTypes = (req, res) => {
    getConsultantStatusTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Consultant Status
export const showConsultantStatusById = (req, res) => {
    getConsultantStatusById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Consultant Status
export const createConsultantStatus = (req, res) => {
    const data = req.body;
    insertConsultantStatus(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Consultant Status
export const updateConsultantStatus = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateConsultantStatusById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Consultant Status
export const deleteConsultantStatus = (req, res) => {
    const id = req.params.id;
    deleteConsultantStatusById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

