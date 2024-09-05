// models/masterModule.js
const mongoose = require('mongoose');

const masterModuleSchema = new mongoose.Schema({
    modulename: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('MasterModule', masterModuleSchema);