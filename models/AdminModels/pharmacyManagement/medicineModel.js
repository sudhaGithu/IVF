const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    medicineName: { type: String, required: true },
    categoryName: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicineCategory', required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    manufacturedBy: { type: String, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'] }
});

module.exports = mongoose.model('Medicine', medicineSchema);
