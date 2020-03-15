'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for event object.
 */
let eventSchema = new Schema({
    //Title of the event
    title: {
        type: String,
        required: "title is required"
    },
    //Event description
    description: {
        type: String,
    },
    //Event date
    date: {
        type: String,
        required: "date is required"
    },
    //Event start time
    startTime: {
        type: String,
    },
    //Event end time
    endTime: {
        type: String,
    },
    //Event location
    location: {
        type: String,
        required: "location is required"
    },
    //Picture description of the event
    picture: {
        type: String
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
eventSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
eventSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('event', eventSchema);