'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Mongoose schema for user object.
 */
let userSchema = new Schema({
    //First name of user
    firstName: {
        type: String,
        required: "FirstName is required"
    },
    //Last name of user
    lastName: {
        type: String,
        required: "LastName is required"
    },
    //Registration email
    email: {
        type: String,
        required: "email is required"
    },
    //Password to login 
    password: {
        type: String,
        required: "password is required"
    },
    //Liked collections of user
    collections: {
        type: Array,
    },
    events: {
        type: Array,
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
userSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('user', userSchema);