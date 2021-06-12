import {getSportTypes, getSportTypesId, insertSportTypes, updateSportTypesById, deleteSportTypesById} from "../models/sportTypeModel.js"


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

//get Sport Types
export const showSportTypesId = (req, res) => {
    getSportTypesId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Create Sport Types
export const createSportTypes = (req, res) => {
    const data = req.body;
    insertSportTypes(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Sport Types
export const updateSportTypes = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateSportTypesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Sport Types
export const deleteSportTypes = (req, res) => {
    const id = req.params.id;
    deleteSportTypesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
