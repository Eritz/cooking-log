const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DateSchema = new Schema({
    date: Date,
    text: String,
    breakfast: {type: Schema.Types.ObjectId, ref: 'Breakfast'},
    lunch: {type: Schema.Types.ObjectId, ref: 'Lunch'},
    dinner: {type: Schema.Types.ObjectId, ref: 'Dinner'},
    snack: {type: Schema.Types.ObjectId, ref: 'Snack'},
})

module.exports = mongoose.model('Date', DateSchema);