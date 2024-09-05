const CenterAdminModule = require('../../models/Roles/permissionsIVFCenters')

// Create a new CenterAdminModule
const addpermissionsCenter = async (req, res) => {
    try {
        const { centerId, adminId, modulePermissions } = req.body;
        
        // Validation can be added here if needed (e.g., checking if references exist)
        
        const centerAdminModule = new CenterAdminModule({ centerId, adminId, modulePermissions });
        await centerAdminModule.save();
        res.status(201).send(centerAdminModule);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all CenterAdminModules (excluding soft-deleted ones)
const getAllpermissionsCenter = async (req, res) => {
    try {
        const centerAdminModules = await CenterAdminModule.find({ deletedAt: null })
            .populate('centerId')
            .populate('adminId')
            .populate('modulePermissions.moduleId')
            .populate('modulePermissions.permissions');
        res.status(200).send(centerAdminModules);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single CenterAdminModule by ID (excluding soft-deleted ones)
const getpermissionsCenter = async (req, res) => {
    try {
        const centerAdminModule = await CenterAdminModule.findOne({ _id: req.params.id, deletedAt: null })
            .populate('centerId')
            .populate({
                path: 'adminId', // Populate the adminId field
                populate: {
                    path: 'role' // Populate the role field inside adminId
                }
            })
            .populate('modulePermissions.moduleId')
            .populate('modulePermissions.permissions');
        if (!centerAdminModule) return res.status(404).send('CenterAdminModule not found');
        res.status(200).send(centerAdminModule);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a CenterAdminModule
const updatepermissionsCenter = async (req, res) => {
    try {
        const { centerId, adminId, modulePermissions } = req.body;
        
        // Validation can be added here if needed
        
        const centerAdminModule = await CenterAdminModule.findOneAndUpdate(
            { _id: req.params.id, deletedAt: null },
            { centerId, adminId, modulePermissions },
            { new: true, runValidators: true }
        )
        .populate('centerId')
        .populate('adminId')
        .populate('modulePermissions.moduleId')
        .populate('modulePermissions.permissions');

        if (!centerAdminModule) return res.status(404).send('CenterAdminModule not found');
        res.status(200).send(centerAdminModule);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Soft delete a CenterAdminModule
const deletepermissionsCenter = async (req, res) => {
    try {
        const centerAdminModule = await CenterAdminModule.findOneAndUpdate(
            { _id: req.params.id, deletedAt: null },
            { deletedAt: new Date() },
            { new: true }
        )
        .populate('centerId')
        .populate('adminId')
        .populate('modulePermissions.moduleId')
        .populate('modulePermissions.permissions');

        if (!centerAdminModule) return res.status(404).send('CenterAdminModule not found');
        res.status(200).send(centerAdminModule);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Restore a soft-deleted CenterAdminModule
const restorepermissionsCenter = async (req, res) => {
    try {
        const centerAdminModule = await CenterAdminModule.findOneAndUpdate(
            { _id: req.params.id, deletedAt: { $ne: null } },
            { deletedAt: null },
            { new: true }
        )
        .populate('centerId')
        .populate('adminId')
        .populate('modulePermissions.moduleId')
        .populate('modulePermissions.permissions');

        if (!centerAdminModule) return res.status(404).send('CenterAdminModule not found');
        res.status(200).send(centerAdminModule);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    addpermissionsCenter,
    getAllpermissionsCenter,
    getpermissionsCenter,
    updatepermissionsCenter,
    deletepermissionsCenter,
    restorepermissionsCenter
}