// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
app.listen(port, () => console.log(`running on localhost:${port}`));

// get route
app.get('/projectData', (req, res) => {
  res.status(200).send(projectData);
});

//post route
app.post('/projectData', (req, res) => {
  projectData = {
    time: req.body.time,
    date: req.body.date,
    temp: req.body.temperature,
    feelings: req.body.feelings,
  };
  res.status(200).send({
    sucess: true,
    message: 'Your data have been stored',
    data: projectData,
  });
});
