const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  billingAddress: { type: String, required: true },
  status: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid', required: true}
});

module.exports = mongoose.model('CUSTOMERSINVENTORY', CustomersSchema);
