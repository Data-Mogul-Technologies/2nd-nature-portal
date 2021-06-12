import db from "../config/database.js";

// Get All Feedbacks
export const getFeedback = (result) => {
    db.query("select customer.first_name,"+
        " feedback.feedback_id,"+
        " customer.last_name,"+
        " feedback.date,"+
        " feedback.how_hear,"+
        " feedback.how_helpful_rate,"+
        " feedback.how_helpful_comment,"+
        " feedback.recommend_rate,"+
        " feedback.recommend_comment,"+
        " feedback.gen_feedback"+
        " from feedback"+
        " join customer on customer.customer_id = feedback.customer_id order by date desc" , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



// Get Single Feedback
export const getFeedbackById = (id, result) => {
    db.query("select customer.first_name,"+
    " customer.last_name,"+
    " feedback.feedback_id,"+
    " customer.customer_id,"+
    " feedback.date,"+
    " feedback.how_hear,"+
    " feedback.how_helpful_rate,"+
    " feedback.how_helpful_comment,"+
    " feedback.recommend_rate,"+
    " feedback.recommend_comment,"+
    " feedback.gen_feedback"+
    " from feedback"+
    " join customer on customer.customer_id = feedback.customer_id where feedback.feedback_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Feedback to Database
export const insertFeedback = (data, result) => {
    db.query("INSERT INTO feedback SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Feedback to Database
export const updateFeedbackById = (data, id, result) => {
    db.query("UPDATE feedback SET date = ?, how_hear = ?, how_helpful_rate = ?, how_helpful_comment = ?, recommend_rate = ?, recommend_comment = ?, gen_feedback = ?  WHERE Feedback_id = ?",
     [  data.date, data.how_hear,data.how_helpful_rate,data.how_helpful_comment,data.recommend_rate,data.recommend_comment,data.gen_feedback,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Feedback to Database
export const deleteFeedbackById = (id, result) => {
    db.query("DELETE FROM feedback WHERE feedback_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Some Feedback
export const getSomeFeedback = (result) => {
    db.query("SELECT * FROM feedback order by date desc limit 1", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
