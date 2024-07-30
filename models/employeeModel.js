// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: true
  },
  fullName:{
    type : String,
    required : true
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
  phone_number: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  },
  joining_date: {
    type: Date,
    required: true
  },
  center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IVFCenter',
    required: true
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status : {
    type : Boolean,
    default : true
  },
  deleted:{
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Employee', employeeSchema);