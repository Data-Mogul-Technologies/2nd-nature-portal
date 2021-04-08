import {getProfileStatus, getProfileStatusById, insertProfileStatus, updateProfileStatusById, deleteProfileStatusById,
 getProfiles, getATProfileTypes, getDMD_profile_types, insertProfile} from "../models/profileModel.js"
    
    //Get All Profile Status 
    export const allProfileStatus = (req, res) => {
        getProfileStatus((err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    
    //get single ProfileStatus
    export const showProfileStatusById = (req, res) => {
        getProfileStatusById(req.params.id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
     
    
    // Create New ProfileStatus
    export const createProfileStatus = (req, res) => {
        const data = req.body;
        insertProfileStatus(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    
    // Update ProfileStatus
    export const updateProfileStatus = (req, res) => {
        const data  = req.body;
        const id    = req.params.id;
        updateProfileStatusById(data, id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    
    // Delete ProfileStatus
    export const deleteProfileStatus = (req, res) => {
        const id = req.params.id;
        deleteProfileStatusById(id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
/*---------------Profile Creation----------------*/        
// Create New Profile
export const createProfile = (req, res) => {
    const data = req.body;
    insertProfile(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

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

export const showATProfileTypes = (req, res) => {
    getATProfileTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showDMD_profile_types = (req, res) => {
    getDMD_profile_types((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


    
    
    
    