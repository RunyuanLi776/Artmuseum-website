/**
 * Service for events operations 
 */

'use strict';
const mongoose = require('mongoose'),
    Event = mongoose.model('event');

/**
 * Return all collections
 *
 * @param {Object} params {Search parameters}
 */
exports.events = function(params) {
    const promise = Event.find(params).exec();
    return promise;
}

/**
 * Return a collection based on id
 */
exports.getEvent = function(eventId) {
    const promise = Event.findById(eventId).exec();
    return promise;
}