// models/permission.js
const mongoose = require('mongoose');

const permissionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Permission', permissionSchema);
