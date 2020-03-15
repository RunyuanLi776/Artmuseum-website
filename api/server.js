'use strict';

module.exports = function(app) {
    //Initialize models
    let collectionModel = require('./models/collectionModel');
    let eventModel = require('./models/eventModel');
    let userModel = require('./models/userModel');

    //Initialize routes
    let routes = require('./routes/route');
    routes(app);
};