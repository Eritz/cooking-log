const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BreakfastSchema = new Schema({
    date: Date,
    meal: [String],
});

module.exports = mongoose.model('Breakfast', BreakfastSchema);