'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for collection object.
 */
let collectionSchema = new Schema({
    //Object number of the collection
    objectNumber: {
        type: String,
        required: "object number is required"
    },
    //author of the collection
    author: {
        type: String,
    },
    //Title of the collection
    title: {
        type: String,
        required: "title is required"
    },
    //Description of the collection
    description: {
        type: String,
    },
    //Collection classification
    classification: {
        type: String,
    },
    //Century when the collection is created
    century: {
        type: String,
    },
    //Culture the collection belongs to 
    culture: {
        type: String
    },
    //Place where the collection is created
    place: {
        type: String
    },
    //picture
    picture: {
        type: String
    }
}, {
    versionKey: false
});

// var collection = mongoose.model('collection', collectionSchema);
// var itemOne = collection({ "ObjectNumber": "123", "Author": "husky", "Title": "coll", "Description": "ection", "Classification": "Print", "Century": "21th", "Culture": "BJ", "Place": "BJ" }).save(function(err) {
//     if (err) throw err;
// });
// var itemTwo = collection({ "ObjectNumber": "456", "Author": "husky2", "Title": "coll", "Description": "ection", "Classification": "Print", "Century": "21th", "Culture": "BJ", "Place": "BJ" }).save(function(err) {
//     if (err) throw err;
// });

// Duplicate the id field as mongoose returns _id field instead of id.
collectionSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
collectionSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('collection', collectionSchema);