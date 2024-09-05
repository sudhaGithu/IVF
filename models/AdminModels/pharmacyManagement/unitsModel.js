const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
