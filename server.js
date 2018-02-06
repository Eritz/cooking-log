const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dateRoute = require('./routes/dateRoute');

// Connect to Mongoose Database
//mongoose.connect("process.env.MONGODB_URI" || "mongodb://localhost/");
// USING TEST ACCOUNT FOR NOW. SWITCH TO ABOVE WHEN DEPLOYING
mongoose.connect('mongodb://cooking-log-user:w2kmoU6wQzqJtfs7DQP4@ds223738.mlab.com:23738/cooking-log');
mongoose.Promise = global.Promise; // use global promise for now
const db = mongoose.connection;


// Express API Config
const port = process.env.Port || 7000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin,Accept, X-Requested-With, Content-Type, Pragma");
    next();
});

// Router Config
app.use('/', dateRoute);


app.listen(port, function() {
    console.log("Running on port " + port);
});

