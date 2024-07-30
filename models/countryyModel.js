const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  deleted:{
    type : Boolean,
    default : false
  }

}, {
  timestamps: true
});

const Country = mongoose.model('Countryy', CountrySchema);
module.exports = Country;