const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (request: any, response: any) => {
  response.json({"message": "Welcome to my weather closet app."})
  console.log(response)
});

app.listen(3001, () => {
  console.log("Server is listening to port 3001")
});