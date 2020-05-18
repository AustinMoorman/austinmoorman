const mongoose = require('mongoose');

const pageVarSchema = mongoose.Schema({
    name: String,
    active: Boolean
})

module.exports = mongoose.model('pageVar',pageVarSchema);