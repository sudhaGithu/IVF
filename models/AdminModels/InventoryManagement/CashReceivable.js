const mongoose = require('mongoose');

const CashReceivableSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'CUSTOMERSINVENTORY', required: true },
    cashReceived: { type: Number, required: true },
    date: { type: Date, required: true },
    paymentType: { type: String, enum: ['Cash', 'Card'], required: true }
});

const CashReceivable = mongoose.model('CashReceivable', CashReceivableSchema);
module.exports = CashReceivable;
