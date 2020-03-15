'use strict'
// Service for user operation.
const mongoose = require('mongoose'),
    User = mongoose.model('user');

//Return an array of object matching the search parameters.
exports.userList = function(params) {
    const promise = User.find(params).exec();
    return promise;
}

//Saves and returns the new object.
exports.save = function(user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
}

//Returns the object matching the id.
exports.get = function(userId) {
    const promise = User.findById(userId).exec();
    return promise;
}

//Check if the email of new user is unique
exports.checkUnique = function(users, user) {
    var flag = false;
    for (var k in users) {
        if (users[k]['email'] === user['email']) {
            const promise = flag;
            return promise;
        }
    }
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
}

//Validation and return the matching user account
exports.validation = function(user, email, pwd) {
    var flag = "noUser";
    for (var k in user) {
        if (user[k]['email'] === email) {
            flag = "emailExist";
            if (user[k]['password'] === pwd) {
                const promise = user[k];
                return promise;
            }
            const promise = flag;
            return promise;
        }
    }
    const promise = flag;
    return promise
}


//Updates and returns the user object.
exports.update = function(user) {
    const promise = User.findOneAndUpdate({ _id: user._id }, user).exec();
    return promise;
}

//Deletes the object matching the id.
exports.delete = function(userId) {
    const promise = User.remove({ _id: userId })
    return promise;
}

// Get user's list of collections
exports.getUserCollections = function(userId) {
    const promise = User.findById(userId).exec();
    return promise;
}

//Get user's list of events
exports.getUserEvents = function(userId) {
    const promise = User.findById(userId).exec();
    return promise;
}

/**
 * Add a collection to current user
 */
exports.addCollection = function(newUser) {
    const promise = User.findOneAndUpdate({ _id: newUser._id }, newUser).exec();
    return promise;
}

/**
 * Book an event to current user
 */
exports.bookEvent = function(newUser) {
    const promise = User.findOneAndUpdate({ _id: newUser._id }, newUser).exec();
    return promise;
}

/**
 * Check before booking an event
 */
exports.checkIfExist = function(user, event) {
    console.log("1");
    for (var k in user['events']) {
        console.log("2");
        console.log(user['events'][k]);
        console.log(event);
        if (user['events'][k]['id'] == event['id']) {

            console.log(k);
            const promise = "True";
            return promise;
        }
    }
    const promise = user;
    return promise;
}