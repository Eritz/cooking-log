const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SnackSchema = new Schema({
    date: Date,
    meal: [String],
});

module.exports = mongoose.model('Snack', SnackSchema);