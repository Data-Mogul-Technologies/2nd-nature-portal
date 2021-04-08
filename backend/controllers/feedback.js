import {getFeedback,getFeedbackById, insertFeedback, deleteFeedbackById, updateFeedbackById } from "../models/feedbackModel.js";
// Get All Feedback
export const showFeedback = (req, res) => {
    getFeedback((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    }); 
}


// Get Single Feedback 
export const showFeedbackById = (req, res) => {
    getFeedbackById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Feedback
export const createFeedback = (req, res) => {
    const data = req.body;
    insertFeedback(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Feedback
export const updateFeedback = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateFeedbackById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Feedback
export const deleteFeedback = (req, res) => {
    const id = req.params.id;
    deleteFeedbackById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}