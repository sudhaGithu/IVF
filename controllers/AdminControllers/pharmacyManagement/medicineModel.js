const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genericName: { type: String, required: true },
    barcode: { type: String, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    size: { type: String, required: false },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    quantity: { type: Number, required: false },
    price: { type: Number, required: false },
    buyPrice: { type: Number, required: false },
    vat: { type: Number, required: false },
    igta: { type: Number, required: false },
    shelf: { type: String, required: false },
    hnsCode: { type: String, required: false },
    strength: { type: String, required: false },
    image: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], required: true },
    categories: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicineCategory', required: true },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Medicine', MedicineSchema);