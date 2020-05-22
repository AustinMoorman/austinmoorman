const mongoose = require('mongoose');

const pageVarSchema = mongoose.Schema({
    home: Object,
    main: Object,
    contact: Object,
    projects: Object,
    skills: Object,
    active: Boolean
})

module.exports = mongoose.model('pageVar',pageVarSchema);