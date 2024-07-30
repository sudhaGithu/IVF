// models/sequenceModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MRNSequenceSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, default: 1000 }
});

const MRNSchema = mongoose.model('MRNNO', MRNSequenceSchema);

module.exports = MRNSchema;
