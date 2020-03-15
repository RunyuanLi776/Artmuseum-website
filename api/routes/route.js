/**
 * Endpoint route definitions.
 */
'use strict'
module.exports = function(app) {
    const userController = require('../controllers/userController');
    const eventController = require('../controllers/eventController');
    const collectionController = require('../controllers/collectionController');

    app.route('/collections')
        .get(collectionController.collectionList);
    app.route('/collections/:collectionId')
        .get(collectionController.getCollection);
    app.route('/collections/classification/:class')
        .get(collectionController.searchByClass);
    app.route('/collections/place/:place')
        .get(collectionController.searchByPlace);
    app.route('/collections/culture/:culture')
        .get(collectionController.searchByCulture);
    app.route('/collections/add/:userId')
        .put(userController.addCollection);

    app.route('/events')
        .get(eventController.eventList);
    app.route('/events/:eventId')
        .get(eventController.getEvent);
    app.route('/events/book/:userId')
        .put(userController.bookEvent);

    app.route('/users')
        .get(userController.userList)
        .post(userController.checkUnique);
    app.route('/users/:email/:pwd')
        .get(userController.validation);
    app.route('/users/:userId')
        .get(userController.getUser)
        .put(userController.putUser)
        .delete(userController.deleteUser);
    app.route('/users/:userId/collections')
        .get(userController.getUserCollections);
    app.route('/users/:userId/events')
        .get(userController.getUserEvents);

}