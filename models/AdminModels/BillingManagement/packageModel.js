const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    quantity: { type: Number, required: true },
    rate: { type: Number, required: true }
});

const packageSchema = new mongoose.Schema({
    packageName: { type: String, required: true },
    description: { type: String, required: true },
    services: [serviceSchema],
    discount: { type: Number, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'] }
});

module.exports = mongoose.model('Package', packageSchema);
