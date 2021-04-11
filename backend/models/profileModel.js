import db from "../config/database.js";


/*-------------------Profile Profile----------*/
//get all Profile Profile
export const getProfileStatus = (result) => {
    db.query("SELECT * FROM status_at_dmd", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single  Profile status
export const getProfileStatusById = (id, result) => {
    db.query("SELECT * FROM status_at_dmd WHERE status_at_dmd_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Profile_status to Database
export const insertProfileStatus = (data, result) => {
    db.query("INSERT INTO status_at_dmd SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Profile_status to Database
export const updateProfileStatusById = (data, id, result) => {
    db.query("UPDATE status_at_dmd SET name = ? WHERE status_at_dmd_id = ?",
     [data.name,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Profile_status to Database
export const deleteProfileStatusById = (id, result) => {
    db.query("DELETE FROM status_at_dmd WHERE status_at_dmd_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
/*--------------Profile Creation-------------*/


// Get All profiles
export const getProfiles = (result) => {
    db.query("select customer.first_name," + 
                    "customer.last_name," +
                    "at_customer_report.at_customer_report_id," +
                    "status_at_dmd.name as profile_status," +
                    "at_customer_report.date," +
                    "at_profile.at_profile as profile_type,"+ 
                    "at_profile.motor_eye,"+
                    "at_profile.directionality,"+
                    "at_profile.vision_freq ,"+
                    "at_profile.peripheral_vision ,"+
                    "at_profile.weight_distribution_stance ,"+
                    "at_profile.ready_posture ,"+
                    "at_profile.learning_style ,"+
                    "at_profile.internal_tempo ,"+
                    "at_profile.smooth_percussive ,"+
                    "at_profile.horizontal_vertical ,"+
                    "at_profile.concentric_polymetric ,"+
                    "at_profile.torso_movement ,"+
                    "sport_type.name as sport,"+
                    "at_customer_report.orientation ,"+ 
                    "at_customer_report.key_aspects_attacking,"+
                    "at_customer_report.vig_backswing,"+
                    "at_customer_report.patience,"+
                    "at_customer_report.jump_style,"+
                    "at_customer_report.approach_style,"+
                    "at_customer_report.ball_defense,"+
                    "at_customer_report.physical_training "+
                "from customer "+
                "join at_customer_report "+  
                    "on customer.customer_id = at_customer_report.customer_id "+
                "join at_profile "+
                    "on at_customer_report.action_type_id = at_profile.at_profile_id "+
                "join sport_type "+
                    "on at_customer_report.sport_type_id = sport_type.sport_type_id "+
                "join status_at_dmd "+
                    "on at_customer_report.status_id = status_at_dmd.status_at_dmd_id "+
                "order by first_name asc", 
    (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//get single profile
export const getProfileById = (id, result) => {
    db.query("select customer.first_name," + 
                "customer.last_name," +
                "at_customer_report.at_customer_report_id," +
                "status_at_dmd.name as profile_status," +
                "at_customer_report.date," +
                "at_profile.at_profile as profile_type,"+ 
                "at_profile.motor_eye,"+
                "at_profile.directionality,"+
                "at_profile.vision_freq ,"+
                "at_profile.peripheral_vision ,"+
                "at_profile.weight_distribution_stance ,"+
                "at_profile.ready_posture ,"+
                "at_profile.learning_style ,"+
                "at_profile.internal_tempo ,"+
                "at_profile.smooth_percussive ,"+
                "at_profile.horizontal_vertical ,"+
                "at_profile.concentric_polymetric ,"+
                "at_profile.torso_movement ,"+
                "sport_type.name as sport,"+
                "at_customer_report.orientation ,"+ 
                "at_customer_report.key_aspects_attacking,"+
                "at_customer_report.vig_backswing,"+
                "at_customer_report.patience,"+
                "at_customer_report.jump_style,"+
                "at_customer_report.approach_style,"+
                "at_customer_report.ball_defense,"+
                "at_customer_report.physical_training "+
            "from customer "+
            "join at_customer_report "+  
                "on customer.customer_id = at_customer_report.customer_id "+
                "and at_customer_report_id = ? "+
            "join at_profile "+
                "on at_customer_report.action_type_id = at_profile.at_profile_id "+
            "join sport_type "+
                "on at_customer_report.sport_type_id = sport_type.sport_type_id "+
            "join status_at_dmd "+
                "on at_customer_report.status_id = status_at_dmd.status_at_dmd_id "+
            "order by first_name asc", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Update Profile to Database
export const updateProfileById = (data, id, result) => {
    db.query("UPDATE at_customer_report SET orientation = ?, key_aspects_attacking = ?, vig_backswing = ?, patience = ?, jump_style = ?, approach_style = ?, ball_defense = ?, physical_training = ? WHERE at_customer_report_id = ? " ,
     [data.orientation, data.key_aspects_attacking, data.vig_backswing, data.patience, data.jump_style, data.approach_style, data.ball_defense, data.physical_training,  id], 
     (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update ProfileStatus of profile to Database
export const updateProfileStatusForCustomer = (data, id, result) => {
    db.query("UPDATE at_customer_report SET status_id = ? WHERE at_customer_report_id = ?" ,
     [data.status_id,  id], 
     (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Get all at_profile_types
export const getATProfileTypes = (result) => {
    db.query("SELECT * FROM at_profile", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Insert at_customer_report to Database
export const insertProfile = (data, result) => {
    db.query("INSERT INTO at_customer_report SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get all dmd_profile_types
export const getDMD_profile_types = (result) => {
    db.query("SELECT * FROM dmd_profile", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

//get all pending profiles
export const getPendingProfiles = (result) => {
    db.query("select customer.first_name, customer.last_name, status_at_dmd.name as profile_status," +
    " at_customer_report.date as start_date, at_profile.at_profile, sport_type.name as sport" +
    " from customer join at_customer_report on customer.customer_id = at_customer_report.customer_id " +
    " join at_profile on at_customer_report.action_type_id = at_profile.at_profile_id " +
    " join sport_type on at_customer_report.sport_type_id = sport_type.sport_type_id " +
    " join status_at_dmd on at_customer_report.status_id = status_at_dmd.status_at_dmd_id " +
    " and status_at_dmd.status_at_dmd_id = 2 order by first_name asc;" , (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}