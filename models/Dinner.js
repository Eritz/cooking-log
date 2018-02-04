const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DinnerSchema = new Schema({
    date: Date,
    meal: [String],
});

module.exports = mongoose.model('Dinner', DinnerSchema);