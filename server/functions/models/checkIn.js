const mongoose = require('mongoose');

const checkInSchema = mongoose.Schema({
    name: String,
    location: Object,
    timeStamp: {type: Number, default: Date.now()}
})

module.exports = mongoose.model('CheckIn',checkInSchema);