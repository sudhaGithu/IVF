const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  status: { type: Boolean,  default: true },
  deleted:{
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Departments', DepartmentSchema);