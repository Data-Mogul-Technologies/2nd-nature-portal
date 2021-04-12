import {getEvents, insertEvent, updateEventById, deleteEventById,getEventById,
getEventStatus,getEventStatusById,insertEventStatus,updateEventStatusById,deleteEventStatusById,
getEventType,getEventTypeById,insertEventType,updateEventTypeById,deleteEventTypeById, getUpcoming, getTotalEvents} from "../models/eventModel.js"

// Get All Events
export const showEvents = (req, res) => {
    getEvents((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single event
export const showEventById = (req, res) => {
    getEventById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Event
export const createEvent = (req, res) => {
    const data = req.body;
    insertEvent(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Event
export const updateEvent = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEventById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Event
export const deleteEvent = (req, res) => {
    const id = req.params.id;
    deleteEventById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

/*-------------------Event Status----------*/
// Get All Event Status
export const showEventStatus = (req, res) => {
    getEventStatus((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single EventStatus
export const showEventStatusById = (req, res) => {
    getEventStatusById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New EventStatus
export const createEventStatus = (req, res) => {
    const data = req.body;
    insertEventStatus(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update EventStatus
export const updateEventStatus = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEventStatusById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete EventStatus
export const deleteEventStatus = (req, res) => {
    const id = req.params.id;
    deleteEventStatusById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


/*-------------------Event Type----------*/

// Get All Event Type
export const showEventType = (req, res) => {
    getEventType((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//get single Event Type
export const showEventTypeById = (req, res) => {
    getEventTypeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Event Type
export const createEventType = (req, res) => {
    const data = req.body;
    insertEventType(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Event Type
export const updateEventType = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEventTypeById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Event Type
export const deleteEventType = (req, res) => {
    const id = req.params.id;
    deleteEventTypeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Upcoming Events
export const showUpcoming = (req, res) => {
    getUpcoming((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Total Upcoming Events
export const showTotalEvents = (req, res) => {
    getTotalEvents((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}