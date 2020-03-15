/**
 * Controller for event part endpoints.
 */
'use strict';
//import service
const eventService = require('..//services/eventService');
/**
 * Returns a list of events in JSON
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.eventList = function(req, res) {
    const resolve = (event) => {
        res.status(200);
        res.json(event);
    }

    eventService.events({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Returns a event in JSON based on id
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getEvent = function(req, res) {
    const resolve = (event) => {
        res.status(200);
        res.json(event);
    };

    eventService.getEvent(req.params.eventId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

//Throws error if error object is present
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};