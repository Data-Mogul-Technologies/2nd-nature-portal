import {getStateById, insertState, updateStateById, deleteStateById} from '../models/stateModel.js'
// Get All Payment Status

//get single payment Status
export const showStateById = (req, res) => {
    getStateById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create New Payment Status
export const createState = (req, res) => {
    const data = req.body;
    insertState(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Payment Status
export const updateState = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateStateById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Payment Status
export const deleteState = (req, res) => {
    const id = req.params.id;
    deleteStateById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}