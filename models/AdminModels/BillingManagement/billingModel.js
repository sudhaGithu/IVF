const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advancePaymentSchema = new Schema({
    date: { type: Date, required: true },
    receiptNo: { type: String, required: true },
    amount: { type: Number, required: true }
});

const bedPaymentSchema = new Schema({
    assignDate: { type: Date, required: true },
    dischargeDate: { type: Date, required: true },
    totalDays: { type: Number, required: true },
    bedNumber: { type: String, required: true },
    amount: { type: Number, required: true }
});

const totalSchema = new Schema({
    total: { type: Number, required: true },
    discount: { type: Number, required: true },
    tax: { type: Number, required: true },
    bedBill: { type: Number, required: true },
    advancePaid: { type: Number, required: true },
    payable: { type: Number, required: true }
});

const billingSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true},// we should take reference from patient table
    billDate: { type: Date, required: true },
    patientName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    sex: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    dischargeDate: { type: Date, required: true },
    packageName: { type: String, required: true },
    insuranceName: { type: String, required: true },
    totalDays: { type: Number, required: true },
    policyNo: { type: String, required: true },
    serviceName: { type: String, required: true },
    quantity: { type: Number, required: true },
    rate: { type: Number, required: true },
    subTotal: { type: Number, required: true },
    advancePayment: [advancePaymentSchema],
    paymentMethod: { type: String, required: true },
    cashCardNo: { type: String, required: true },
    receiptNo: { type: String, required: true },
    bedPayment: [bedPaymentSchema],
    total: totalSchema,
    notes: { type: String, required: true },
    status: { type: String, enum: ['paid', 'unpaid'], required: true }
});

module.exports = mongoose.model('Billing', billingSchema);
