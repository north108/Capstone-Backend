require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const CONNECTION_URL = process.env.URL;
const DATABASE_NAME = 'usersDatabase';

// import routes
let apiRoutes = require('./api-routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var database, colletion;
// use API routes in APP
app.use('/api', apiRoutes)

const port = process.env.PORT || 3200;

app.get('/', (request: any, response: any) => 
  response.send('Hello World with Express')
);

app.listen(port, () => {
  // console.log(`running at port ${port}`)
  mongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true }, (error: any, client: any) => {
    if(error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    colletion = database.collection('personnel');
    console.log(`Connected to ${DATABASE_NAME}!`)
  });
});