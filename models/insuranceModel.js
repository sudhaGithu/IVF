const mongoose = require('mongoose');


const InsuranceSchema = new mongoose.Schema({
    name: String,
    serviceTax: Number,
    discount: Number,
    remark: String,
    insuranceNo: String,
    insuranceCode: String,
    diseaseCharge: String,
    hospitalRate: Number,
    insuranceRate: Number,
    total: Number,
    status: Boolean,
    deleted: { type: Boolean, default: false }, // Soft delete flag
  });
  
  const Insurance = mongoose.model('Insurance', InsuranceSchema);

  module.exports = Insurance