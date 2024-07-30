// models/supplier.js
const mongoose = require('mongoose');

// Schema definitions
const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Model creation
const Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = Supplier;
