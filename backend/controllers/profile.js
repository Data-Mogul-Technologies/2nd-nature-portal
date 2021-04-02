// import connection
import { getProfiles, getProfileslessDeets } from  "../models/ProfileModel.js";


// Get All Profile
export const showProfiles = (req, res) => {
    getProfiles((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showProfileslessDeets = (req, res) => {
    getProfileslessDeets((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}