//express instantiation
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


//mongoose instance connection url connection
mongoose.connect('mongodb+srv://username:pwd@cluster0-pyyrg.mongodb.net/artmuseum?retryWrites=true&w=majority', {
    userMongoClient: false,
    config: { autoIndex: false }
    // useNewUrlParser: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Initialize app
let initApp = require('./api/server');
initApp(app);

app.listen(port);
console.log('Art-museum server started on: ' + port);