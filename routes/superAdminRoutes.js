const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/fileupload')

const AdminController = require('../controllers/adminController') 
const superAdminController = require('../controllers/superAdminController')
const ivfCenterController = require('../controllers/ivfCenterController');
const authentication = require('../middlewares/authenticate')
const checkPermission = require('../middlewares/permissionAuthorizer')

//superadmin creation and admin login
router.post('/createsuperadmin', superAdminController.createAdmin)
router.post('/superadminlogin' , superAdminController.loginAdmin)
router.get('/dashboard', superAdminController.getDashboardStats)

// admin routes
router.post('/createadmin',authentication.adminauthenticate,checkPermission('Admin','Create'),upload.fields([{ name: 'image', maxCount: 1 }, { name: 'idProof', maxCount: 1 }]), AdminController.createAdmin)
router.get('/getalladmins',authentication.adminauthenticate,checkPermission('Admin','Read'),AdminController.getallAdmins)
router.get('/getadminbyid/:id',authentication.adminauthenticate,checkPermission('Admin','Read'), AdminController.getAdminById)
router.put('/adminstatus/:id',authentication.adminauthenticate,checkPermission('Admin','Update'), AdminController.adminStatus)
router.put('/deleteadmin/:id',authentication.adminauthenticate,checkPermission('Admin','Delete'), AdminController.deleteAdminById)
router.post('/updateadmin/:id',authentication.adminauthenticate,checkPermission('Admin','Update'),AdminController.updateAdminById)


//ivf center routes
router.post('/status/:id',authentication.adminauthenticate,checkPermission('IVF Centers','Update'), ivfCenterController.stausChange)
router.get('/getallivf-centers',authentication.adminauthenticate,checkPermission('IVF Centers','Read'), ivfCenterController.getAllIVFCenters);
router.get('/getivf-centers/:id',authentication.adminauthenticate,checkPermission('IVF Centers','Read'), ivfCenterController.getIVFCenterById);
router.post('/addivf-centers',authentication.adminauthenticate,checkPermission('IVF Centers','Create'), ivfCenterController.createIVFCenter);
router.put('/updateivf-centers/:id',authentication.adminauthenticate,checkPermission('IVF Centers','Update'), ivfCenterController.updateIVFCenter);
router.delete('/deleteivf-centers/:id',authentication.adminauthenticate,checkPermission('IVF Centers','Delete'), ivfCenterController.deleteIVFCenter);
router.post('/ivf-centerfilter',authentication.adminauthenticate, checkPermission('IVF Centers','Read'),ivfCenterController.searchIVFCentersByZipCodeAndDate)



module.exports = router;

//15