import {getBusiness, getBusinessById, insertBusiness, updateBusinessById, deleteBusinessById} from "../models/businessModel.js"

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

//get single Business
export const showBusinessById = (req, res) => {
    getBusinessById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Business
export const createBusiness = (req, res) => {
    const data = req.body;
    insertBusiness(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Business
export const updateBusiness = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateBusinessById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Business
export const deleteBusiness = (req, res) => {
    const id = req.params.id;
    deleteBusinessById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
