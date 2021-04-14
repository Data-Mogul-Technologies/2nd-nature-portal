// import connection
import db from "../config/database.js";

export const getProspectDate = (result) => {
    db.query("select  customer.prospect_date as ProspectDate," +
    " customer.actual_date as ActualDate,"+
    " customer.first_name as FirstName,"+
    " customer.last_name LastName,"+
    " business.name as BusinessName,"+
    " customer_type.name as CustomerType,"+
    " sport_type.name as SportType,"+
    " customer.mobile_phone as MobilePhone," +
    " customer.office_phone as OfficePhone,"+
    " customer.home_phone as HomePhone,"+
    " customer.email as Email"+
    " from customer "+
    " join business"+
    " on customer.customer_id = business.business_id"+
    " join customer_type"+
    " on customer.customer_type_id= customer_type.customer_type_id"+
    " join customer_status"+
    " on customer.customer_status_id= customer_status.customer_status_id"+
    " join sport_type"+
    " on customer.sport_type_id= sport_type.sport_type_id"+
    " order by customer.actual_date desc", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getAllYrRetRateConsult = (result) => {
    db.query("select sport_consultant.first_name as FirstName , sport_consultant.last_name LastName,"+
    " count(customer.prospect_date) as ProspectDate,"+
    " count(NULLIF(customer.actual_date, '0000-00-00'))  as ActualDate,"+
    " concat(round((count(NULLIF(customer.actual_date, '0000-00-00')))*100/count(customer.prospect_date)), '%') as RetentionRate" +
   " from customer"+
   " join sport_consultant_customer"+
   " on customer.customer_id= sport_consultant_customer.customer_id"+
   " join sport_consultant"+
   " on sport_consultant.sport_consultant_id= sport_consultant_customer.sport_consultant_id"+
   " group by sport_consultant.sport_consultant_id", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getLastYrRetRateConsult = (result) => {
    db.query("select sport_consultant.first_name as FirstName , sport_consultant.last_name LastName,"+
    " count(customer.prospect_date) as ProspectDate,"+
    " count(NULLIF(customer.actual_date, '0000-00-00'))  as ActualDate,"+
    " concat(round((count(NULLIF(customer.actual_date, '0000-00-00')))*100/count(customer.prospect_date)), '%') as RetentionRate" +
    " from customer"+
    " join sport_consultant_customer"+
    " on customer.customer_id= sport_consultant_customer.customer_id"+
    " join sport_consultant"+
    " on sport_consultant.sport_consultant_id= sport_consultant_customer.sport_consultant_id"+
    " WHERE customer.prospect_date> now() - INTERVAL 12 month"+
    " group by sport_consultant.sport_consultant_id", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCurrYrRetRateConsult = (result) => {
    db.query("select sport_consultant.first_name as FirstName , sport_consultant.last_name LastName,"+
    " count(customer.prospect_date) as ProspectDate,"+
    " count(NULLIF(customer.actual_date, '0000-00-00'))  as ActualDate,"+
    " concat(round((count(NULLIF(customer.actual_date, '0000-00-00')))*100/count(customer.prospect_date)), '%') as RetentionRate" +
    " from customer"+
    " join sport_consultant_customer"+
    " on customer.customer_id= sport_consultant_customer.customer_id"+
    " join sport_consultant"+
    " on sport_consultant.sport_consultant_id= sport_consultant_customer.sport_consultant_id"+
    " where  YEAR(customer.prospect_date) = YEAR(CURDATE())"+
    " group by sport_consultant.sport_consultant_id"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getRetRateCompany = (result) => {
    db.query("select count(customer.prospect_date) as ProspectDate,"+
    " count(NULLIF(customer.actual_date, '0000-00-00'))  as ActualDate,"+
    " concat(round((count(NULLIF(customer.actual_date, '0000-00-00')))*100/count(customer.prospect_date)), '%') as RetentionRate"+
    " from customer"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


export const getEventAttendeesByID = (id, result) => {
    db.query("select customer.first_name as FirstName," +
    " customer.last_name as LastName," +
    " customer.customer_id,"+
    " business.name as Business,"+ 
    " payment_status.name as PaymentStatus,"+
    " registration.event_id," +
    " registration.registration_id" +
    " from registration"+
    " join event" +
    " on registration.event_id=event.event_id"+
    " join customer"+
    " on registration.customer_id=customer.customer_id"+
    " join registration_payment"+
    " on registration.registration_id=registration_payment.registration_id"+
    " join business"+
    " on customer.business_id=business.business_id"+
    " join payment_status"+
    " on registration_payment.payment_status_id= payment_status.payment_status_id"+
    " where event.event_id = ?"
    ,[id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Test this one for sure
export const getAnnualPaymentCust = (result) => {
    db.query( "SELECT CONCAT('$',format((SELECT sum(amount) FROM customer_service_type_payment),2)) as Services," +
    " CONCAT('$',format((SELECT sum(amount) FROM registration_payment),2)) as Events," +
    " CONCAT('$',format(COALESCE(SUM((SELECT sum(amount) FROM customer_service_type_payment)),0)+COALESCE(SUM((SELECT sum(amount)"+
    " FROM registration_payment)),0),2)) AS Total"   
    , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getATReportResult = (result) => {
    db.query("Select customer.first_name AS 'FirstName', customer.last_name AS 'LastName', customer.email AS 'EmailAddress',"+
    " business.name AS 'BusinessName', sport_type.name AS 'SportType',at_profile.at_profile AS 'ATProfileResult',status_at_dmd.name AS 'ReportStatus',"+
    " date AS 'ReportDate' from at_customer_report"+
    " INNER JOIN customer ON at_customer_report.customer_id = customer.customer_id"+
    " INNER JOIN at_profile ON at_customer_report.action_type_id = at_profile.at_profile_id"+
    " INNER JOIN sport_type ON at_customer_report.sport_type_id = sport_type.sport_type_id"+
    " INNER JOIN status_at_dmd ON at_customer_report.status_at_dmd_id = status_at_dmd.status_at_dmd_id"+
    " INNER JOIN business ON customer.business_id = business.business_id"+
    " Order By date DESC"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getDMDReportResult = (result) => {
    db.query("Select customer.first_name AS 'FirstName', customer.last_name AS 'LastName', customer.email AS 'EmailAddress',"+
    " business.name AS 'BusinessName', sport_type.name AS 'SportType',dmd_profile.dom_driver AS 'DMDDominantDriver',"+
    " dmd_profile.sec_driver AS 'SecondaryDriver', status_at_dmd.name AS 'DMDReportStatus', date AS 'ReportDate' from dmd_customer_report"+
    " INNER JOIN customer ON dmd_customer_report.customer_id = customer.customer_id"+
    " INNER JOIN dmd_profile ON dmd_customer_report.dmd_action_type_id = dmd_profile.dmd_profile_id"+
    " INNER JOIN sport_type ON customer.sport_type_id = sport_type.sport_type_id"+
    " INNER JOIN status_at_dmd ON dmd_customer_report.status_id = status_at_dmd.status_at_dmd_id"+
    " INNER JOIN business ON customer.business_id = business.business_id"+
    " Order By date DESC"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


export const getCountBusSport = (result) => {
    db.query("Select business.name AS 'BusinessName', sport_type.name AS 'SportType', at_profile.at_profile AS 'ATProfileType',"+
    " COUNT(at_profile.at_profile) AS 'ATProfileTrend' from at_customer_report"+
    " INNER JOIN customer ON at_customer_report.customer_id = customer.customer_id"+
    " INNER JOIN at_profile ON at_customer_report.action_type_id = at_profile.at_profile_id"+
    " INNER JOIN sport_type ON at_customer_report.sport_type_id = sport_type.sport_type_id"+
    " INNER JOIN business ON customer.business_id = business.business_id"+
    " Group By business.name, sport_type.name, at_profile.at_profile"+
    " Order By business.name"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCountATReport = (result) => {
    db.query("Select at_profile.at_profile AS 'ActionTypes',COUNT(at_profile.at_profile) AS 'ATProfileTrend' from at_customer_report"+
    " INNER JOIN at_profile ON at_customer_report.action_type_id = at_profile.at_profile_id"+
    " Group By at_profile.at_profile"+
    " Order By at_profile.at_profile"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCountHowHear = (result) => {
    db.query("Select how_hear AS 'Howcustomershearof2NP', CONCAT(round(COUNT(how_hear) *100 / totalhear.ct_hear),'%') as 'percentResults' from feedback"+
    " CROSS JOIN (SELECT COUNT(how_hear) AS ct_hear FROM feedback) totalhear"+
    " Group By how_hear"+
    " Order By how_hear"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCountRecHelp = (result) => {
    db.query("select how_helpful_rate AS 'Rating', CONCAT(round(COUNT(how_helpful_rate) *100 / totalhelp.ct_helpful),'%') AS 'HowHelpfulwas2NP',"+
    " CONCAT(round(COUNT(recommend_rate) *100 / totalrec.ct_recommend),'%') AS 'HowlikelyRecommend2NP'"+
    " FROM feedback"+
    " CROSS JOIN (SELECT COUNT(how_helpful_rate) AS ct_helpful FROM feedback) totalhelp"+
    " CROSS JOIN (SELECT COUNT(recommend_rate) AS ct_recommend FROM feedback) totalrec"+
    " Group By how_helpful_rate"+
    " Order By how_helpful_rate ASC"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getCustFeedback = (result) => {
    db.query("select customer.first_name As 'FirstName', customer.last_name As 'LastName', sport_type.name as 'Sporttype',"+
    " at_profile.at_profile AS 'ATProfileResult', how_hear As 'HowHearResponse', how_helpful_comment as 'HowhelpfulComments',"+
    " recommend_comment as 'RecommendComments', gen_feedback As 'GeneralFeedback'"+
    " FROM feedback"+
    " INNER JOIN customer ON feedback.customer_id = customer.customer_id"+
    " INNER JOIN sport_type ON customer.sport_type_id = sport_type.sport_type_id"+
    " INNER JOIN at_customer_report ON customer.customer_id = at_customer_report.customer_id"+
    " INNER JOIN at_profile ON at_customer_report.action_type_id = at_profile.at_profile_id" +
    " order by customer.first_name"
   , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getConsultantCust = (id,result) => {
    db.query("SELECT sport_consultant.last_name AS 'Consultant', customer.last_name AS 'CustomerLastName',"+
    " customer.first_name AS 'CustomerFirstName', customer.email AS 'Email', customer.mobile_phone AS 'MobilePhone', business.name AS 'Business'"+
    " FROM sport_consultant_customer"+
    " INNER JOIN sport_consultant ON sport_consultant_customer.sport_consultant_id = sport_consultant.sport_consultant_id"+
    " INNER JOIN customer ON sport_consultant_customer.customer_id = customer.customer_id"+
    " INNER JOIN business ON customer.business_id = business.business_id"+
    " WHERE sport_consultant.sport_consultant_id = ?"+
    " ORDER By customer.last_name" ,[id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

