// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  image: {
    type: String // This will store the path to the uploaded image
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  idProof: {
    type: String // Assuming ID proof can be stored as a string (e.g., file path or URL)
  },
  status:{
    type : Boolean,
    default : true
  },
  deleted:{
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Admin', adminSchema);