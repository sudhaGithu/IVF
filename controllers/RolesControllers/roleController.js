const Role = require('../../models/Roles/role')

// Create a new role
const addRole = async (req, res) => {
    try {
        const role = new Role(req.body);
        await role.save();
        res.status(201).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all roles (excluding soft-deleted ones)
const getAllRole = async (req, res) => {
    try {
        const roles = await Role.find({ deletedAt: null });
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single role by ID (excluding soft-deleted ones)
const getRole = async (req, res) => {
    try {
        const role = await Role.findOne({ _id: req.params.id, deletedAt: null });
        if (!role) {
            return res.status(404).send('Role not found');
        }
        res.status(200).send(role);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a role
const updateRole = async (req, res) => {
    try {
        const role = await Role.findOneAndUpdate(
            { _id: req.params.id, deletedAt: null },
            req.body,
            { new: true, runValidators: true }
        );
        if (!role) {
            return res.status(404).send('Role not found');
        }
        res.status(200).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Soft delete a role
const deleteRole = async (req, res) => {
    try {
        const role = await Role.findOneAndUpdate(
            { _id: req.params.id, deletedAt: null },
            { deletedAt: new Date() },
            { new: true }
        );
        if (!role) {
            return res.status(404).send('Role not found');
        }
        res.status(200).send(role);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Restore a soft-deleted role
const restoreRole = async (req, res) => {
    try {
        const role = await Role.findOneAndUpdate(
            { _id: req.params.id, deletedAt: { $ne: null } },
            { deletedAt: null },
            { new: true }
        );
        if (!role) {
            return res.status(404).send('Role not found');
        }
        res.status(200).send(role);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    addRole,
    getAllRole,
    getRole,
    updateRole,
    deleteRole,
    restoreRole
}