const mongoose = require('mongoose');

const expenseInvoiceSchema = new mongoose.Schema({
    expenseType: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseType', required: true },
    date: { type: Date, required: true },
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    rate: { type: Number, required: true },
    total: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
    paidAmount: { type: Number, required: true },
    remainingDue: { type: Number, required: true },
    status: { type: String, enum: ['Paid', 'Unpaid'], required: true } 
});

module.exports = mongoose.model('ExpenseInvoice', expenseInvoiceSchema);
