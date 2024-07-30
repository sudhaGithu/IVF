const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: { type: mongoose.Schema.Types.ObjectId, ref: 'Countryy', required: true },
  deleted : { type : Boolean , default : false }
}, {
  timestamps: true
});

const State = mongoose.model('State', stateSchema);
module.exports = State;