const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productName: { type: String, required: true },
    image: { type: String }, // Assuming this is a URL or file path
    categories: { type: Schema.Types.ObjectId, ref: 'inventoryCategory', required: true },
    warehouse: { type: Schema.Types.ObjectId, ref: 'Warehouse', required: true },
    mfgDate: { type: Date, required: true },
    expDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    units: { type: String, required: true },
    lowStockAlert: { type: Number, required: true },
    supplierPrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    model: { type: String },
    suppliers: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
    isDeleted: { type: Boolean, default: false },
    isDeadStock: { type: Boolean, default: false },
    deletedAt: { type: Date },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
