import {insertRegistration, insertCustServ, insertDefaultRegistrationPayment} from '../models/registrationModel.js'




// Create New Registration for an event
export const createRegistration = (req, res) => {
    const data = req.body;
    insertRegistration(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createDefaultRegistrationPayment = (req, res) => {
    insertDefaultRegistrationPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Registration
export const createCustServ = (req, res) => {
    const data = req.body;
    insertCustServ(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


