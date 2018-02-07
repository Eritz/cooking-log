const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dateRoute = require('./routes/dateRoute');

// Connect to Mongoose Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => { console.log('MongoDB Connected'); });
mongoose.connection.on('error', (err) => { console.log('MongoDB connection error: ', err); });
const db = mongoose.connection;


// Express API Config
const port = process.env.PORT || 7000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
if (port === process.env.PORT) {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

//To prevent errors from Cross Origin Resource Sharing, set 
//our headers to allow CORS with middleware like so for the local:
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "https://cooking-log.herokuapp.com/");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin,Accept, X-Requested-With, Content-Type, Pragma");
    next();
});


// Router Config
app.use('/', dateRoute);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


app.listen(port, function() {
    console.log("Running on port " + port);
});

