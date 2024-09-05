const mongoose = require('mongoose');

const medicineCategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    categoryImage: { type: String, required: true },  
    bannerImage: { type: String, required: true },   
    sorting: { type: Number, default: 0 },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    showInHome: { type: Boolean, default: false },
    showInTopMenu: { type: Boolean, default: false },
    topCategory: { type: Boolean, default: false },
    type: { type: String, enum: ['Inventory', 'Ecommerce'], required: true },
}, { timestamps: true });


module.exports = mongoose.model('MedicineCategory', medicineCategorySchema);