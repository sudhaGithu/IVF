const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/fileupload')

const superAdminController = require('../controllers/adminController') 
const adminController = require('../controllers/superAdminController')
const ivfCenterController = require('../controllers/ivfCenterController');

//superadmin creation and admin login
router.post('/createsuperadmin', adminController.createAdmin)
router.post('/superadminlogin' , adminController.loginAdmin)

// admin routes
router.post('/createadmin',upload.fields([{ name: 'image', maxCount: 1 }, { name: 'idProof', maxCount: 1 }]), superAdminController.createAdmin)
router.get('/getalladmins',superAdminController.getallAdmins)
router.get('/getadminbyid/:id', superAdminController.getAdminById)
router.put('/adminstatus/:id', superAdminController.adminStatus)
router.put('/deleteadmin/:id', superAdminController.deleteAdminById)
router.post('/updateadmin/:id', superAdminController.updateAdminById)


//ivf center routes
router.post('/status/:id', ivfCenterController.stausChange)
router.get('/getallivf-centers', ivfCenterController.getAllIVFCenters);
router.get('/getivf-centers/:id', ivfCenterController.getIVFCenterById);
router.post('/addivf-centers', ivfCenterController.createIVFCenter);
router.put('/updateivf-centers/:id', ivfCenterController.updateIVFCenter);
router.delete('/deleteivf-centers/:id', ivfCenterController.deleteIVFCenter);
router.post('/ivf-centerfilter', ivfCenterController.searchIVFCentersByZipCodeAndDate)



module.exports = router;

//15