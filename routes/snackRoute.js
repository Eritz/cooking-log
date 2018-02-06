const express = require('express');
const SnackModel = require('../models/Snack');

const router = express.Router({mergeParams: true});

/**
 * "/dates/:date/snack"
 * GET: finds all meals on that time
 * POST: add new items for that time
 * DELETE: delete a meal for that time
 */
router.route("/")
.get(function(req, res) {
    SnackModel.findOne({date: req.params.date}).then(snackChosen => {
        if (!snackChosen) {
            res.end()
        } else {
            return res.status(200).json({snackChosen});
        }
    })
})

// POST - Find date, then add/update meals in the entry's .meal
// the req.body.meal is an array, so we will use $set to update the old array with this one
.post(function (req, res) {
    SnackModel.findOneAndUpdate({date: req.params.date},
        {$set : {meal: req.body.meal}},{upsert:true},
        function(err) {
            if (err) {res.send(err)}
            res.json({message: "Finished updating snack"})
        }
    )
})

module.exports = router;