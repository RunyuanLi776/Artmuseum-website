/**
 * Controller for endpoints.
 */
'use strict';
//import service
const collectionService = require('../services/collectionService');
/**
 * Returns a list of collections in JSON
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.collectionList = function(req, res) {
    const resolve = (collection) => {
        res.status(200);
        res.json(collection);
    };

    collectionService.collections({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Returns a collection in JSON based on id
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.getCollection = function(req, res) {
    const resolve = (collection) => {
        res.status(200);
        res.json(collection);
    };
    collectionService.getCollection(req.params.collectionId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

/**
 * Returns a collections array based on class
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.searchByClass = function(req, res) {
    const resolve = (collections) => {
        console.log(collections);
        const promise = collectionService.searchByClass(collections, req.params.class);
        return promise;
    };
    const resolve2 = (collections) => {
        res.status(200);
        res.json({
            "results": collections
        })
    }

    collectionService.collections({})
        .then(resolve)
        .then(resolve2)
        .catch(renderErrorResponse(res));
}

/**
 * Returns a collections array based on place
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.searchByPlace = function(req, res) {
    const resolve = (collections) => {
        console.log(collections);
        const promise = collectionService.searchByPlace(collections, req.params.place);
        return promise;
    };
    const resolve2 = (collections) => {
        res.status(200);
        res.json({
            "results": collections
        })
    }

    collectionService.collections({})
        .then(resolve)
        .then(resolve2)
        .catch(renderErrorResponse(res));
}

/**
 * Returns a collections array based on culture
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.searchByCulture = function(req, res) {
    const resolve = (collections) => {
        console.log(collections);
        const promise = collectionService.searchByCulture(collections, req.params.culture);
        return promise;
    };
    const resolve2 = (collections) => {
        res.status(200);
        res.json({
            "results": collections
        })
    }

    collectionService.collections({})
        .then(resolve)
        .then(resolve2)
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