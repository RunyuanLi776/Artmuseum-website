/**
 * Service for collection operations 
 */

'use strict';
const mongoose = require('mongoose'),
    Collection = mongoose.model('collection');

/**
 * Return all collections
 *
 * @param {Object} params {Search parameters}
 */
exports.collections = function(params) {
    const promise = Collection.find(params).exec();
    return promise;
}

/**
 * Return a collection based on id
 */
exports.getCollection = function(collectionId) {
    const promise = Collection.findById(collectionId).exec();
    return promise;
}

/**
 * Return a collection based on classification
 */
exports.searchByClass = function(collections, classification) {
        var results = [];
        for (var k in collections) {
            if (collections[k]['classification'] === classification) {
                results.push(collections[k]);
            }
        }
        const promise = results;
        return promise;
    }
    /** 
     * Return a collection based on place
     */
exports.searchByPlace = function(collections, place) {
    var results = [];
    for (var k in collections) {
        if (collections[k]['place'] === place) {
            results.push(collections[k]);
        }
    }
    const promise = results;
    return promise;
}

/** 
 * Return a collection based on culture
 */
exports.searchByCulture = function(collections, culture) {
    var results = [];
    for (var k in collections) {
        if (collections[k]['culture'] === culture) {
            results.push(collections[k]);
        }
    }
    const promise = results;
    return promise;
}