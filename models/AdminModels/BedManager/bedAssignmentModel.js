// app/models/bedAssignmentModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bedAssignmentSchema = new Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Assuming you have a Patient model
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  bedNumber: {
    type: Number,
    required: true,
  },
  assignDate: {
    type: Date,
    required: true,
  },
  dischargeDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['assigned', 'discharged'],
    default: 'assigned',
  },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('BedAssignment', bedAssignmentSchema);
