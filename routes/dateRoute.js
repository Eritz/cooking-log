const express = require('express');
const DateModel = require('../models/Date');

const breakfastRoute = require('./breakfastRoute');
const lunchRoute = require('./lunchRoute');
const dinnerRoute = require('./dinnerRoute');
const snackRoute = require('./snackRoute');


const router = express.Router();

/**
 * "/"
 * GET: print out main page
 */
router.route("/")
.get(function(req, res) {
    //res.send("Hello Main page");
    res.json({message: "This should be the main page: localhost:7000/"})
})

/**
 * "/dates"
 * GET: finds all dates
 * POST: create a new date entry
 */
router.route("/dates")
.get(function(req, res) {
    DateModel.find(function(err, data){
        if (err) {
            res.send(err)
        }
        res.json(data);
    });
})

.post(function(req, res) {
    const newDate = new DateModel();
    newDate.date = new Date(); // temp
    newDate.text = req.body.text; // temp to just see things

    newDate.save(function(err) {
        if (err) {res.send(err);}
        res.json({message:"Added new Date"});
    });
});


/**
 * "/dates/num"
 * GET: get that date entry
 */
router.route("/dates/:date")
.get(function(req, res) {
    DateModel.findOne({"date" : req.params.date})
    .then(dateChosen => {
        if (!dateChosen) {res.status(404).end();}
        return res.status(200).json({dateChosen});
    });
});

// Use this router to go to meal route based on date
router.use('/dates/:date/breakfast', breakfastRoute);
router.use('/dates/:date/lunch', lunchRoute);
router.use('/dates/:date/dinner', dinnerRoute);
router.use('/dates/:date/snack', snackRoute);

module.exports = router;