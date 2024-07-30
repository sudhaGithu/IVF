// models/modulePermission.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const modulePermissionSchema = new Schema({
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module',
        required: true
    },
    permission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission',
        required: true
    }
});

module.exports = mongoose.model('ModulePermission', modulePermissionSchema);
