const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    rate: { type: Number, required: true },
    total: { type: Number, required: true }
}, { _id: false });

const invoiceSchema = new Schema({
    supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
    warehouse: { type: Schema.Types.ObjectId, ref: 'Warehouse', required: true },
    date: { type: Date, default : Date.now(), required: true },
    image: { type: String }, // Assuming image URL or path
    items: [itemSchema],
    grandTotal: { type: Number, required: true },
    paidAmount: { type: Number, default: 0 },
    due: { type: Number, default: 0 },
    invoiceNo: { type: String, unique: true, required: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date }
}, { timestamps: true });


const Invoice = mongoose.model('SupplierInvoice', invoiceSchema);

module.exports = Invoice;
