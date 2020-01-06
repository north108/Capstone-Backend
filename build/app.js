"use strict";
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var CONNECTION_URL = process.env.URL;
var DATABASE_NAME = 'usersDatabase';
// import routes
var apiRoutes = require('./api-routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var database, colletion;
// use API routes in APP
app.use('/api', apiRoutes);
var port = process.env.PORT || 3200;
app.get('/', function (request, response) {
    return response.send('Hello World with Express');
});
app.listen(port, function () {
    // console.log(`running at port ${port}`)
    mongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true }, function (error, client) {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        colletion = database.collection('personnel');
        console.log("Connected to " + DATABASE_NAME + "!");
    });
});
