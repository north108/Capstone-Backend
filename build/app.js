"use strict";
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3200;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.listen(port, function () {
    console.log("running at port " + port);
});
