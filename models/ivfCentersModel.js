const mongoose = require('mongoose');

const ivfCenterSchema = new mongoose.Schema({
    IVF_Center_name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
        country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true }
    },
    createdOn:{type:Date, default: Date.now()},
    status:{ type : Boolean, default : true },
    assignAdmin : { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true},
    
  deleted:{
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('IVFCenter', ivfCenterSchema);