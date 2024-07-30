const mongoose = require('mongoose');

const medicineCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'] }
});

module.exports = mongoose.model('MedicineCategory', medicineCategorySchema);
