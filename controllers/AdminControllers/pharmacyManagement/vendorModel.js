const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    payable: {
        type: Number,
        required: true,
        default: 0
    },
    due: {
        type: Number,
        required: true,
        default: 0
    }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
