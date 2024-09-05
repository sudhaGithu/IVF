const mongoose = require('mongoose');

const masterPermissionsSchema = new mongoose.Schema({
    moduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MasterModule',
        required: true
    },
    permissions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission',
        required: true
    }],
    deletedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('MasterPermissions', masterPermissionsSchema);
