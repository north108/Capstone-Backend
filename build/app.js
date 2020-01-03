"use strict";
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var CONNECTION_URL = process.env.URL;
var DATABASE_NAME = 'usersDatabase';
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var database, colletion;
var port = process.env.PORT || 3200;
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
