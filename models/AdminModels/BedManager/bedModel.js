// app/models/bedModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bedSchema = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  bedNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['available', 'occupied', 'maintenance'],
    default: 'available',
  },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Bed', bedSchema);
