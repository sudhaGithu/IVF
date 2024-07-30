const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    center: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IVFCenter',
        required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    area: {
        type: String,
        required: true
    },
    assignAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    createdOn :{
        type : Date,
        default : Date.now()
    },
    status:{
        type : Boolean,
        default : true
    },
    deleted:{
      type : Boolean,
      default : false
    }
});

module.exports = mongoose.model('Branch', branchSchema);
