// models/warehouse.js
const mongoose = require('mongoose');

// Schema definitions
const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Employee',
     required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Model creation
const Warehouse = mongoose.model('Warehouse', WarehouseSchema);

module.exports = Warehouse;
