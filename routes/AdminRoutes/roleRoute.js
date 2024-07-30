const express = require('express');
const router = express.Router();
const {
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
} = require('../../controllers/AdminControllers/roleController');

// Module Routes
router.post('/modules', addModule);
router.put('/modules/:id', editModule);
router.delete('/modules/:id', deleteModule);
router.get('/modules', getModules);
router.get('/modules/:id', getModuleById);

// Permission Routes
router.post('/permissions', addPermission);
router.put('/permissions/:id', editPermission);
router.delete('/permissions/:id', deletePermission);
router.get('/permissions', getPermissions);
router.get('/permissions/:id', getPermissionById);

// ModulePermission Routes
router.post('/module-permissions', addModulePermission);
router.put('/module-permissions/:id', editModulePermission);
router.delete('/module-permissions/:id', deleteModulePermission);
router.get('/module-permissions', getModulePermissions);
router.get('/module-permissions/:id', getModulePermissionById);

// Role Routes
router.post('/roles', addRole);
router.put('/roles/:id', editRole);
router.delete('/roles/:id', deleteRole);
router.get('/', getRoles);
router.get('/roles/:id', getRoleById);

// RolePermission Routesroles
router.post('/role-permissions', addRolePermission);
router.put('/role-permissions/:id', editRolePermission);
router.delete('/role-permissions/:id', deleteRolePermission);
router.get('/role-permissions', getRolePermissions);
router.get('/role-permissions/:id', getRolePermissionById);

module.exports = router;
