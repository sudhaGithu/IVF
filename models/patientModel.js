const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  address1: String,
  address2: String,
  country: { type: Schema.Types.ObjectId, ref: 'Country' }, // Reference to Country model
  state: { type: Schema.Types.ObjectId, ref: 'State' },       // Reference to State model
  district: { type: String, required: true },
  pincode: String
});

const PatientSchema = new Schema({
  fullName: { type: String, required: true },
  MRNNO : { type : String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  phoneNumber: String,
  email: { type: String, required: true, unique: true },
  dateOfBirth: Date,
  age: Number,
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'] },
  occupation: String,
  address: AddressSchema,
  deleted:{
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Patient', PatientSchema);
