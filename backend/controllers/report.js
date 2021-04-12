import {getProspectDate, getAllYrRetRateConsult, getLastYrRetRateConsult, getCurrYrRetRateConsult, getRetRateCompany,
getEventAttendeesByID, getAnnualPaymentCust, getATReportResult, getDMDReportResult,getCountBusSport,
getCountATReport, getCountHowHear, getCountRecHelp, getCustFeedback, getConsultantCust} from '../models/reportModel.js'


export const allProspectDate = (req, res) => {
    getProspectDate((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


export const allYrRetRateConsult = (req, res) => {
    getAllYrRetRateConsult((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allLastYrRetRateConsult = (req, res) => {
    getLastYrRetRateConsult((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allCurrYrRetRateConsult = (req, res) => {
    getCurrYrRetRateConsult((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allRetRateCompany = (req, res) => {
    getRetRateCompany((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allEventAttendeesById = (req, res) => {
    getEventAttendeesByID(req.params.id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allAnnualPaymentCust = (req, res) => {
    getAnnualPaymentCust((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allATReportResult = (req, res) => {
    getATReportResult((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allDMDReportResult = (req, res) => {
    getDMDReportResult((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allCountBusSport = (req, res) => {
    getCountBusSport((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allCountATReport = (req, res) => {
    getCountATReport((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allCountHowHear = (req, res) => {
    getCountHowHear((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allCountRecHelp = (req, res) => {
    getCountRecHelp((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allCustFeedback = (req, res) => {
    getCustFeedback((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const allConsultantCust = (req, res) => {
    getConsultantCust(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}