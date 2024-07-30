const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    date: { type: Date, required: true },
    itemName: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unitCode: { type: String, required: true },
    rate: { type: Number, required: true },
    discount: { type: Number, required: true },
    total: { type: Number, required: true },
    paymentType: { type: String, enum: ['Cash', 'Card'], required: true },
    totalDiscount: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
    paidAmount: { type: Number, required: true },
    totalDue: { type: Number, required: true },
    status: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' }
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = Invoice;
