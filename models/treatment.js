const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String  // Store image path or URL
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

module.exports = mongoose.model('Treatment', treatmentSchema);