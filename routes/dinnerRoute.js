const express = require('express');
const DinnerModel = require('../models/Dinner');

const router = express.Router({mergeParams: true});

/**
 * "/dates/:date/dinner
 * GET: finds all meals on that time
 * POST: add new items for that time
 * DELETE: delete a meal for that time
 * copy-paste for each route
 */
router.route("/")
.get(function(req, res) {
    DinnerModel.findOne({date: req.params.date}).then(dinnerChosen => {
        if (!dinnerChosen) {
            res.end()
        } else {
            return res.status(200).json({dinnerChosen});
        }
    })
})

// POST - Find date, then add/update meals in the entry's .meal
// the req.body.meal is an array, so we will use $set to update the old array with this one
.post(function (req, res) {
    DinnerModel.findOneAndUpdate({date: req.params.date},
        {$set : {meal: req.body.meal}},{upsert:true},
        function(err) {
            if (err) {res.send(err)}
            res.json({message: "Finished updating dinner"})
        }
    )
})

module.exports = router;