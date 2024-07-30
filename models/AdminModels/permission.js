// models/permission.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const permissionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Permission', permissionSchema);
