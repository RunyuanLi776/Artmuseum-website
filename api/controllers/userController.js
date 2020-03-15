/**
 * Controller for user part endpoints.
 */
'use strict';
//import service
const userService = require('../services/userService');

/**
 * Returns a list of users in JSON
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.userList = function(req, res) {
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    }

    userService.userList({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Returns an user in JSON based on id
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getUser = function(req, res) {
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    };

    userService.get(req.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Validate user account based on email and pwd
 */
exports.checkUnique = function(req, res) {
    const resolve = (users) => {
        const promise = userService.checkUnique(users, req.body);
        return promise;
    }
    const resolve2 = (result) => {
        res.status(200);
        res.json(result);
    }

    userService.userList({})
        .then(resolve)
        .then(resolve2)
        .catch(renderErrorResponse(res));
}

/**
 * Validate user account based on email and pwd
 */
exports.validation = function(req, res) {
    const resolve = (user) => {
        const result = userService.validation(user, req.params.email, req.params.pwd);
        if (result === "emailExist") {
            res.status(200);
            res.json({
                "message": 'Invalid password'
            });
        }

        if (result === "noUser") {
            res.status(200);
            res.json({
                "message": 'User account not exist'
            });
        } else {
            res.status(200);
            res.json(result);
        }
    }

    userService.userList({})
        .then(resolve)
        .catch(renderErrorResponse(res));
};


/**
 *  Add a new user in the user collection
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.postUser = function(req, res) {
    const newUser = Object.assign({}, req.body);
    const resolve = (user) => {
        res.status(200);
        res.json(user);
    }

    userService.save(newUser)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 *  Update user in the user collection
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.putUser = function(req, res) {
    const user = Object.assign({}, req.body);
    const resolve = (user) => {
        res.status(200);
        res.json({
            message: 'user information updated successfully'
        });
    }
    user._id = req.params.userId;
    userService.update(user)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 *  Delete user in the user collection
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.deleteUser = function(req, res) {
    const resolve = (user) => {
        res.status(200);
        res.json({
            message: 'user account has been deleted successfully!'
        });
    }

    userService.delete(req.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 *  Get user's lists of collections
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getUserCollections = function(req, res) {
    const resolve = (userClt) => {
        res.status(200);
        res.json(userClt['collections']);
    }
    userService.getUserCollections(req.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Add chose collection into current user's list
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.addCollection = function(req, res) {
    const resolve1 = (user) => {
        console.log(user['collections'].push(req.body));
        const newUser = {
            "collections": user['collections']
        }
        newUser._id = req.params.userId;
        const promise = userService.addCollection(newUser);
        return promise;
    }

    const resolve2 = (user) => {
        res.status(200);
        res.json({
            message: 'success'
        });
    }

    userService.get(req.params.userId)
        .then(resolve1)
        .then(resolve2)
        .catch(renderErrorResponse(res));
}

/**
 *  Get user's lists of events
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getUserEvents = function(req, res) {
    const resolve = (userClt) => {
        res.status(200);
        res.json(userClt['events']);
    }

    userService.getUserEvents(req.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Add chose event into current user's list
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.bookEvent = function(req, res) {
    const resolve1 = (user) => {
        const promise = userService.checkIfExist(user, req.body);
        return promise;
    }

    const resolve2 = (result) => {
        if (result === "True") {
            console.log("fail");
            res.status(200);
            res.json({
                message: 'Add fail, this event is already in your list!'
            });

        } else {
            result['events'].push(req.body);
            const newUser = {
                "events": result['events']
            }
            newUser._id = req.params.userId;
            const promise = userService.bookEvent(newUser);
            return promise;
        }
    }

    const resolve3 = (result) => {
        res.status(200);
        res.json({
            message: 'Success'
        })
    }

    userService.get(req.params.userId)
        .then(resolve1)
        .then(resolve2)
        .then(resolve3)
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