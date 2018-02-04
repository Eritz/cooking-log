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
.post(function (req, res) {
    DinnerModel.findOneAndUpdate({date: req.params.date},
        {$push : {meal: req.body.meal}},{upsert:true},
        function(err) {
            if (err) {res.send(err)}
            res.json({message: "Finished updating dinner"})
        }
    )
})

module.exports = router;