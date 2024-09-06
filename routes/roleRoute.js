const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RolesControllers/roleController');
const moduleController = require('../controllers/RolesControllers/masterModuleController')
const masterpermissionController = require('../controllers/RolesControllers/masterPermissionsController')
const permissionsIVFCenters = require('../controllers/RolesControllers/permissionIVFCenters') 
const permissionController = require('../controllers/RolesControllers/permissionController')
const authentication = require('../middlewares/authenticate')


// Role Routes
router.post('/addroles', roleController.addRole);
router.put('/updaterole/:id',authentication.adminauthenticate, roleController.updateRole);
router.delete('/deleterole/:id',authentication.adminauthenticate, roleController.deleteRole);
router.get('/getallroles',authentication.adminauthenticate, roleController.getAllRole);
router.get('/getrole/:id',authentication.adminauthenticate,roleController.getRole);
router.patch('/restorerole/:id',authentication.adminauthenticate,roleController.restoreRole);

//master module Routes
router.post('/addmastermodule',authentication.adminauthenticate, moduleController.addmasterModule);
router.put('/updatemastermodule/:id',authentication.adminauthenticate, moduleController.updatemasterModule);
router.delete('/deletemastermodule/:id',authentication.adminauthenticate, moduleController.deletemasterModule);
router.get('/getallrmastermodule',authentication.adminauthenticate, moduleController.getallmasterModule);
router.get('/getmastermodule/:id',authentication.adminauthenticate,moduleController.getmasterModule);
router.patch('/restoremastermodule/:id',authentication.adminauthenticate,moduleController.restoremasterModule);

// master permissions Routes
router.post('/addmasterpermission',authentication.adminauthenticate, masterpermissionController.addPermission);
router.put('/updatemasterpermission/:id',authentication.adminauthenticate, masterpermissionController.updatePermission);
router.delete('/deletemasterpermission/:id',authentication.adminauthenticate, masterpermissionController.deletePermission);
router.get('/getallrmasterpermission',authentication.adminauthenticate, masterpermissionController.getAllPermission);
router.get('/getmasterpermission/:id',authentication.adminauthenticate,masterpermissionController.getPermission);
router.patch('/restoremastepermission/:id',authentication.adminauthenticate,masterpermissionController.restorePermission);

// permissions centers Routes
router.post('/addpermissioncenter', authentication.adminauthenticate,permissionsIVFCenters.addpermissionsCenter);
router.put('/updatepermissioncenter/:id',authentication.adminauthenticate, permissionsIVFCenters.updatepermissionsCenter);
router.delete('/deletepermissioncenter/:id',authentication.adminauthenticate, permissionsIVFCenters.deletepermissionsCenter);
router.get('/getallpermissioncenter',authentication.adminauthenticate, permissionsIVFCenters.getAllpermissionsCenter);
router.get('/getpermissioncenter/:id',authentication.adminauthenticate,permissionsIVFCenters.getpermissionsCenter);
router.patch('/restorepermissioncenter/:id',authentication.adminauthenticate,permissionsIVFCenters.restorepermissionsCenter);


// Permission Routes
router.post('/permissions',authentication.adminauthenticate, permissionController.addPermission);
router.put('/permissions/:id',authentication.adminauthenticate, permissionController.editPermission);
router.delete('/permissions/:id',authentication.adminauthenticate, permissionController.deletePermission);
router.get('/permissions',authentication.adminauthenticate, permissionController.getPermissions);
router.get('/permissions/:id',authentication.adminauthenticate, permissionController.getPermissionById);

module.exports = router;



//29