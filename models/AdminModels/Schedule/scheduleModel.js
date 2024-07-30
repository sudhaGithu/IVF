// app/models/scheduleModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  slotName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  availableDays: {
    type: [String], // E.g., ['Monday', 'Wednesday', 'Friday']
    required: true,
  },
  availableTime: {
    startTime: {
      type: String, // E.g., '09:00'
      required: true,
    },
    endTime: {
      type: String, // E.g., '17:00'
      required: true,
    },
  },
  perPatientTime: {
    type: Number, // E.g., 30 (minutes)
    required: true,
  },
  serviceVisibility: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
