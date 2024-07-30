// models/rolePermission.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolePermissionSchema = new Schema({
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    modulePermission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ModulePermission',
        required: true
    }
});

module.exports = mongoose.model('RolePermission', rolePermissionSchema);
