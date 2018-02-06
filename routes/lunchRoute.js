const express = require('express');
const LunchModel = require('../models/Lunch');

const router = express.Router({mergeParams: true});

/**
 * "/dates/:date/lunch"
 * GET: finds all meals on that time
 * POST: add new items for that time
 * DELETE: delete a meal for that time
 */
router.route("/")
.get(function(req, res) {
    LunchModel.findOne({date: req.params.date}).then(lunchChosen => {
        if (!lunchChosen) {
            res.end()
        } else {
            return res.status(200).json({lunchChosen});
        }
    })
})

// POST - Find date, then add/update meals in the entry's .meal
// the req.body.meal is an array, so we will use $set to update the old array with this one
.post(function (req, res) {
    LunchModel.findOneAndUpdate({date: req.params.date},
        {$set : {meal: req.body.meal}},{upsert:true},
        function(err) {
            if (err) {res.send(err)}
            res.json({message: "Finished updating lunch"})
        }
    )
})

module.exports = router;