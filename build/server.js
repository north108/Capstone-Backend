"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (request, response) {
    response.json({ "message": "Welcome to my weather closet app." });
});
app.listen(3001, function () {
    console.log("Server is listening to port 3001");
});
