const mongoose = require('mongoose');

const centerAdminModuleSchema = new mongoose.Schema({
    centerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IVFCenter',
        //required: true
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    modulePermissions: [{
        moduleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MasterModule',
            required: true
        },
        permissions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permission'
        }]
    }],
    deletedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('CenterAdminModule', centerAdminModuleSchema);
