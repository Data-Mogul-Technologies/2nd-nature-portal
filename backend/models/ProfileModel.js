// import connection
import db from "../config/database.js";

// Get All profiles
export const getProfiles = (result) => {
    db.query("select customer.first_name, customer.last_name, status_at_dmd.name, at_profile.at_profile, at_profile.motor_eye, at_profile.directionality, at_profile.vision_freq, at_profile.peripheral_vision, at_profile.weight_distribution_stance, at_profile.ready_posture, at_profile.learning_style, at_profile.internal_tempo, at_profile.smooth_percussive, at_profile.horizontal_vertical, at_profile.concentric_polymetric, at_profile.torse_movement, sport_type.name, at_customer_report.orientation, at_customer_report.key_aspects_attacking, at_customer_report.vig_backswing, at_customer_report.patience, at_customer_report.jump_style, at_customer_report.approach_style, at_customer_report.ball_control_first_contant_or_Defense_serve_receive_movement, at_customer_report.physicaly_training from customer join at_customer_report on customer.customer_id = at_customer_report.customer_id join at_profile on at_customer_report.action_type_id = at_profile.at_profile_id join sport_type on at_customer_report.sport_type_id = sport_type.sport_type_id join status_at_dmd on at_customer_report.status_id = status_at_dmd.status_at_dmd_id order by first_name asc", 
    (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//Get All profiles less details 

export const getProfileslessDeets = (result) => {
    db.query("select * from at_customer_report join status_at_dmd on at_customer_report.status_id = status_at_dmd.status_at_dmd_id", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// "select customer.first_name," + 
//                 "customer.last_name," +
//                 "status_at_dmd.name," +
//                 "at_profile.at_profile,"+ 
//                 "at_profile.motor_eye,"+
//                 "at_profile.directionality,"+
//                 "at_profile.vision_freq ,"+
//                 "at_profile.peripheral_vision ,"+
//                 "at_profile.weight_distribution_stance ,"+
//                 "at_profile.ready_posture ,"+
//                 "at_profile.learning_style ,"+
//                 "at_profile.internal_tempo ,"+
//                 "at_profile.smooth_percussive ,"+
//                 "at_profile.horizontal_vertical ,"+
//                 "at_profile.concentric_polymetric ,"+
//                 "at_profile.torse_movement ,"+
//                 "sport_type.name,"+
//                 "at_customer_report.orientation ,"+ 
//                 "at_customer_report.key_aspects_attacking,"+
//                 "at_customer_report.vig_backswing,"+
//                 "at_customer_report.patience,"+
//                 "at_customer_report.jump_style,"+
//                 "at_customer_report.approach_style,"+
//                 "at_customer_report.ball_control_first_contant_or_Defense_serve_receive_movement,"+
//                 "at_customer_report.physicaly_training "+
//             "from customer "+
//             "join at_customer_report "+  
//             "on customer.customer_id = at_customer_report.customer_id "+
//             "join at_profile "+
//             "on at_customer_report.action_type_id = at_profile.at_profile_id "+
//             "join sport_type "+
//             "on at_customer_report.sport_type_id = sport_type.sport_type_id "+
//             "join status_at_dmd "+
//             "on at_customer_report.status_id = status_at_dmd.status_at_dmd_id "+
//             "order by first_name asc"