const mongoose = require('mongoose');

// Schema definitions
const InsuranceClaimSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  roomNo: String,
  diseaseDetails: String,
  consultantName: String,
  policyName: String,
  policyNo: String,
  policyHolderName: String,
  insurance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Insurance',
    required: true
  },
  approvalChargeBreakup: String,
  total: Number,
  status: {
    type: Boolean,
    default: true
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

// Model creation
const InsuranceClaim = mongoose.model('InsuranceClaim', InsuranceClaimSchema);

module.exports = InsuranceClaim;
