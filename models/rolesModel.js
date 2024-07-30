const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  roleName: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: 'Departments', required: true }, // Single department reference
  createdOn : { type : Date , default : Date.now()},
  status : { type : Boolean , default : true },
  deleted:{
    type : Boolean,
    default : false
  }

});

module.exports = mongoose.model('Roles', RoleSchema);