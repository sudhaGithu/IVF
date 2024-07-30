const mongoose = require('mongoose');

const SuperAdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password:{type:String, required:true},
    phoneNumber: { type: String },
    deleted:{
      type : Boolean,
      default : false
    }

});

const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema);

module.exports = SuperAdmin;