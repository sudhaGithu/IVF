const mongoose = require('mongoose');

const LeafSchema = new mongoose.Schema({
    leafType: {
        type: String,
        required: true,
    },
    qtyBox: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Leaf', LeafSchema);
