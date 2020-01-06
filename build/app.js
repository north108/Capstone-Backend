"use strict";
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
// const mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var objectId = require('mongodb').ObjectID;
var CONNECTION_URL = process.env.URL;
var DATABASE_NAME = 'usersDatabase';
var app = express();
// import routes
var apiRoutes = require('./api-routes');
// configure bodyparser to handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true });
var database = mongoose.connection;
if (!database) {
    console.log('Error connecting to database');
}
else {
    console.log('Database connected successfully');
}
// set server port
var port = process.env.PORT || 3200;
app.get('/', function (request, response) {
    return response.send('Hello World with Express');
});
// routes
app.use('/api', apiRoutes);
// listen to port
app.listen(port, function () {
    console.log("Running server on port " + port);
});
// var database, colletion;
// // use API routes in APP
// app.use('/api', apiRoutes)
// const port = process.env.PORT || 3200;
// app.get('/', (request: any, response: any) => 
//   response.send('Hello World with Express')
// );
// app.listen(port, () => {
//   // console.log(`running at port ${port}`)
//   mongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true }, (error: any, client: any) => {
//     if(error) {
//       throw error;
//     }
//     database = client.db(DATABASE_NAME);
//     colletion = database.collection('personnel');
//     console.log(`Connected to ${DATABASE_NAME}!`)
//   });
// });
