// models/sequenceModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EMPSequenceSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, default: 1000 }
});

const EMPIDSchema = mongoose.model('EMPID', EMPSequenceSchema);

module.exports = EMPIDSchema;
