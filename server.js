var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser');

var customers = require('./routes/customer');
var initializeDb = require('./data/initializeDb');

var app = express();

// load mongoose package
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/testdb')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

app.set('port', process.env.PORT || '3000');

// Register our templating engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

initializeDb();

app.use('/api/customers', customers);

http
    .createServer(app)
    .listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });