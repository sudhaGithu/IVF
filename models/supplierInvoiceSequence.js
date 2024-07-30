
// models/sequenceModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const invoiceSequenceSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, default: 1000 }
});

const invoiceSchema = mongoose.model('INVOICENO', invoiceSequenceSchema);

module.exports = invoiceSchema;
