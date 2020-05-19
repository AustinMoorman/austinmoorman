const mongoose = require('mongoose');

const pageVarSchema = mongoose.Schema({
    home: {Object},
    main: {Object},
    active: Boolean
})

module.exports = mongoose.model('pageVar',pageVarSchema);