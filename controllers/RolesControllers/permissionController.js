const Permission = require('../../models/Roles/permission')

// Permission CRUD operations
const addPermission = async (req, res) => {
    const { name } = req.body;
    const permission = new Permission({ name });
    await permission.save();
    res.status(201).json({
        status: 201,
        message: 'Permission created successfully',
        data: permission
    });
};

const editPermission = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const permission = await Permission.findById(id);
    if (!permission) {
        res.status(404).json({
            status: 404,
            message: 'Permission not found'
        });
        return;
    }
    permission.name = name || permission.name;
    await permission.save();
    res.status(200).json({
        status: 200,
        message: 'Permission updated successfully',
        data: permission
    });
};

const deletePermission = async (req, res) => {
    const { id } = req.params;
    const permission = await Permission.findById(id);
    if (!permission) {
        res.status(404).json({
            status: 404,
            message: 'Permission not found'
        });
        return;
    }
    await permission.remove();
    res.status(200).json({
        status: 200,
        message: 'Permission removed successfully'
    });
};

const getPermissions = async (req, res) => {
    const permissions = await Permission.find();
    res.status(200).json({
        status: 200,
        message: 'Permissions retrieved successfully',
        data: permissions
    });
};

const getPermissionById = async (req, res) => {
    const { id } = req.params;
    const permission = await Permission.findById(id);
    if (!permission) {
        res.status(404).json({
            status: 404,
            message: 'Permission not found'
        });
        return;
    }
    res.status(200).json({
        status: 200,
        message: 'Permission retrieved successfully',
        data: permission
    });
};

module.exports = {
    addPermission,
    getPermissions,
    getPermissionById,
    deletePermission,
    editPermission
}