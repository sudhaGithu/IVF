// app/models/timeSlotModel.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const timeSlotSchema = new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true, enum: ['active', 'inactive'], default: 'active' }
});

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);

module.exports = TimeSlot;
