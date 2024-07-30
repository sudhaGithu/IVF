const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    description: { type: String,  },
    quantity: { type: Number, required: true },
    rate: { type: Number, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'] }
});

module.exports = mongoose.model('Service', serviceSchema);
