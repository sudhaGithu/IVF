// models/Order.js

const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  customerName: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  sampleCollectionAddress: {
    type: String,
    required: true
  },
  sampleCollectionSlot: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['At Door Step', 'Diagnostics Center'],
    required: true
  },
  bookedOn: {
    type: Date,
    default: Date.now
  },
  bookingStatus: {
    type: String,
    enum: ['new', 'ongoing', 'completed', 'assigned'],
    default: 'new'
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'COD'],
    default: 'COD'
  },
  phlebotomist: {
    type: String
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Order', orderSchema);
