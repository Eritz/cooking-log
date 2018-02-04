const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LunchSchema = new Schema({
    date: Date,
    meal: [String],
});

module.exports = mongoose.model('Lunch', LunchSchema);