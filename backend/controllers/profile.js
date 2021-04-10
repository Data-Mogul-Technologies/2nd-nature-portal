import {getProfileStatus, getProfileStatusById, insertProfileStatus, updateProfileStatusById, deleteProfileStatusById,
<<<<<<< HEAD
 getProfiles, getATProfileTypes, getDMD_profile_types, insertProfile,
getATProfileById, updateATProfileById, getDmdProfileById,updateDmdProfileById} from "../models/profileModel.js"
=======
 getProfiles, getATProfileTypes, getDMD_profile_types, insertProfile, getPendingProfiles} from "../models/profileModel.js"
>>>>>>> 66d404699153ff1945820203735c8e1081dc5079
    
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




/*-------------AT Profile-----------*/
export const showATProfileTypes = (req, res) => {
    getATProfileTypes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

    //get single ProfileStatus
    export const showATProfileById = (req, res) => {
        getATProfileById(req.params.id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
     
    
    // Update ProfileStatus
    export const updateATProfile = (req, res) => {
        const data  = req.body;
        const id    = req.params.id;
        updateATProfileById(data, id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    
/*------------DMD Profile----------*/
    
    
    
export const showDMD_profile_types = (req, res) => {
    getDMD_profile_types((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

<<<<<<< HEAD
    //get single DmdProfile
    export const showDmdProfileById = (req, res) => {
        getDmdProfileById(req.params.id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
     
=======
export const showPendingProfiles = (req, res) => {
    getPendingProfiles((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


    
>>>>>>> 66d404699153ff1945820203735c8e1081dc5079
    
 
    // Update DmdProfile
    export const updateDmdProfile = (req, res) => {
        const data  = req.body;
        const id    = req.params.id;
        updateDmdProfileById(data, id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    
