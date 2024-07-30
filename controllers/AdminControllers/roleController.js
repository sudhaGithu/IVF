const asyncHandler = require('express-async-handler');
const Module = require('../../models/AdminModels/module');
const Permission = require('../../models/AdminModels/permission');
const ModulePermission = require('../../models/AdminModels/modulePermission');
const Role = require('../../models/AdminModels/role');
const RolePermission = require('../../models/AdminModels/rolePermission');

const addModule = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const module = new Module({ name });
    await module.save();
    res.status(201).json({
        status: 201,
        message: 'Module created successfully'
      
    });
});

const editModule = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const module = await Module.findById(id);
    if (!module) {
        res.status(404).json({
            status: 404,
            message: 'Module not found'
        });
        return;
    }
    module.name = name || module.name;
    await module.save();
    res.status(200).json({
        status: 200,
        message: 'Module updated successfully'
        
    });
});

const deleteModule = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const module = await Module.findById(id);
    if (!module) {
        res.status(404).json({
            status: 404,
            message: 'Module not found'
        });
        return;
    }
    await module.remove();
    res.status(200).json({
        status: 200,
        message: 'Module removed successfully'
    });
});

const getModules = asyncHandler(async (req, res) => {
    const modules = await Module.find();
    res.status(200).json({
        status: 200,
        message: 'Modules retrieved successfully',
        data: modules
    });
});

const getModuleById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const module = await Module.findById(id);
    if (!module) {
        res.status(404).json({
            status: 404,
            message: 'Module not found'
        });
        return;
    }
    res.status(200).json({
        status: 200,
        message: 'Module retrieved successfully',
        data: module
    });
});
// Permission CRUD operations
const addPermission = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const permission = new Permission({ name });
    await permission.save();
    res.status(201).json({
        status: 201,
        message: 'Permission created successfully',
        data: permission
    });
});

const editPermission = asyncHandler(async (req, res) => {
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
});

const deletePermission = asyncHandler(async (req, res) => {
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
});

const getPermissions = asyncHandler(async (req, res) => {
    const permissions = await Permission.find();
    res.status(200).json({
        status: 200,
        message: 'Permissions retrieved successfully',
        data: permissions
    });
});

const getPermissionById = asyncHandler(async (req, res) => {
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
});

const addModulePermission = asyncHandler(async (req, res) => {
    const { module, permission } = req.body;
    const modulePermission = new ModulePermission({ module, permission });
    await modulePermission.save();
    res.status(201).json({
        status: 201,
        message: 'ModulePermission created successfully',
        data: modulePermission
    });
});

const editModulePermission = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { module, permission } = req.body;
    const modulePermission = await ModulePermission.findById(id);
    if (!modulePermission) {
        res.status(404).json({
            status: 404,
            message: 'ModulePermission not found'
        });
        return;
    }
    modulePermission.module = module || modulePermission.module;
    modulePermission.permission = permission || modulePermission.permission;
    await modulePermission.save();
    res.status(200).json({
        status: 200,
        message: 'ModulePermission updated successfully',
        data: modulePermission
    });
});

const deleteModulePermission = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const modulePermission = await ModulePermission.findById(id);
    if (!modulePermission) {
        res.status(404).json({
            status: 404,
            message: 'ModulePermission not found'
        });
        return;
    }
    await modulePermission.remove();
    res.status(200).json({
        status: 200,
        message: 'ModulePermission removed'
    });
});

const getModulePermissions = asyncHandler(async (req, res) => {
    const modulePermissions = await ModulePermission.find().populate('module permission');
    res.status(200).json({
        status: 200,
        message: 'ModulePermissions retrieved successfully',
        data: modulePermissions
    });
});

const getModulePermissionById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const modulePermission = await ModulePermission.findById(id).populate('module permission');
    if (!modulePermission) {
        res.status(404).json({
            status: 404,
            message: 'ModulePermission not found'
        });
        return;
    }
    res.status(200).json({
        status: 200,
        message: 'ModulePermission retrieved successfully',
        data: modulePermission
    });
});
// Role CRUD operations
const addRole = asyncHandler(async (req, res) => {
    const { name, modulePermissions } = req.body;

    // Create the new role
    const role = new Role({ name });
    await role.save();

    // Create the role permissions
    const rolePermissions = modulePermissions.map(mp => ({
        role: role._id,
        modulePermission: mp
    }));
    await RolePermission.insertMany(rolePermissions);

    res.status(201).json({
        status: 201,
        message: 'Role created successfully',
        data: role
    });
});


const editRole = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, modulePermissions } = req.body;

    
    const role = await Role.findById(id);
    if (!role) {
        res.status(404).json({
            status: 404,
            message: 'Role not found'
        });
        return;
    }

    
    role.name = name || role.name;
    await role.save();

    // If new module permissions are provided, create them
    if (modulePermissions && modulePermissions.length > 0) {
        const newRolePermissions = modulePermissions.map(mp => ({
            role: role._id,
            modulePermission: mp
        }));
        await RolePermission.insertMany(newRolePermissions);
    }

    res.status(200).json({
        status: 200,
        message: 'Role updated successfully',
        data: role
    });
});

const deleteRole = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const role = await Role.findById(id);
    if (!role) {
        res.status(404).json({
            status: 404,
            message: 'Role not found'
        });
        return;
    }
    await role.remove();
    res.status(200).json({
        status: 200,
        message: 'Role removed successfully'
    });
});

const getRoles = asyncHandler(async (req, res) => {
    const roles = await Role.find();

    const rolesWithPermissions = await Promise.all(roles.map(async (role) => {
        const rolePermissions = await RolePermission.find({ role: role._id })
            .populate({
                path: 'modulePermission',
                populate: [
                    { path: 'module', model: 'Module', select: 'name' },
                    { path: 'permission', model: 'Permission', select: 'name' }
                ]
            });

        const modulesMap = rolePermissions.reduce((acc, rolePermission) => {
            const { module, permission } = rolePermission.modulePermission;

            if (!acc[module._id]) {
                acc[module._id] = {
                    module: { _id: module._id, name: module.name },
                    permissions: []
                };
            }

            acc[module._id].permissions.push({
                _id: permission._id,
                name: permission.name
            });

            return acc;
        }, {});

        const modules = Object.values(modulesMap);

        return {
            ...role._doc,
            modules
        };
    }));

    res.status(200).json({
        status: 200,
        message: 'Roles retrieved successfully',
        data: roles
    });
});

const getRoleById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const role = await Role.findById(id);
    if (!role) {
        res.status(404).json({
            status: 404,
            message: 'Role not found'
        });
        return;
    }

    const rolePermissions = await RolePermission.find({ role: role._id })
        .populate({
            path: 'modulePermission',
            populate: [
                { path: 'module', model: 'Module', select: 'name' },
                { path: 'permission', model: 'Permission', select: 'name' }
            ]
        });

    const modulesMap = rolePermissions.reduce((acc, rolePermission) => {
        const { module, permission } = rolePermission.modulePermission;

        if (!acc[module._id]) {
            acc[module._id] = {
                module: { _id: module._id, name: module.name },
                permissions: []
            };
        }

        acc[module._id].permissions.push({
            _id: permission._id,
            name: permission.name
        });

        return acc;
    }, {});

    const modules = Object.values(modulesMap);

    res.status(200).json({
        status: 200,
        message: 'Role retrieved successfully',
        data: {
            ...role._doc,
            modules
        }
    });
});


// RolePermission CRUD operations
const addRolePermission = asyncHandler(async (req, res) => {
    const { role, modulePermission } = req.body;
    const rolePermission = new RolePermission({ role, modulePermission });
    await rolePermission.save();
    res.status(201).json(rolePermission);
});

const editRolePermission = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { role, modulePermission } = req.body;
    const rolePermission = await RolePermission.findById(id);
    if (!rolePermission) {
        res.status(404);
        throw new Error('RolePermission not found');
    }
    rolePermission.role = role || rolePermission.role;
    rolePermission.modulePermission = modulePermission || rolePermission.modulePermission;
    await rolePermission.save();
    res.status(200).json(rolePermission);
});

const deleteRolePermission = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const rolePermission = await RolePermission.findById(id);
    if (!rolePermission) {
        res.status(404);
        throw new Error('RolePermission not found');
    }
    await rolePermission.remove();
    res.status(200).json({ message: 'RolePermission removed' });
});

const getRolePermissions = asyncHandler(async (req, res) => {
    const rolePermissions = await RolePermission.find().populate('role modulePermission');
    res.status(200).json(rolePermissions);
});

const getRolePermissionById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const rolePermission = await RolePermission.findById(id).populate('role modulePermission');
    if (!rolePermission) {
        res.status(404);
        throw new Error('RolePermission not found');
    }
    res.status(200).json(rolePermission);
});

module.exports = {
    addModule,
    editModule,
    deleteModule,
    getModules,
    getModuleById,
    addPermission,
    editPermission,
    deletePermission,
    getPermissions,
    getPermissionById,
    addModulePermission,
    editModulePermission,
    deleteModulePermission,
    getModulePermissions,
    getModulePermissionById,
    addRole,
    editRole,
    deleteRole,
    getRoles,
    getRoleById,
    addRolePermission,
    editRolePermission,
    deleteRolePermission,
    getRolePermissions,
    getRolePermissionById
};
