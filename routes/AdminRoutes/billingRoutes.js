const express = require('express');
const router = express.Router();

const billingController = require('../../controllers/AdminControllers/BillingManagement/billingController');
const advancePaymentController = require('../../controllers/AdminControllers/BillingManagement/advancePaymentController');
const packageController = require('../../controllers/AdminControllers/BillingManagement/packageController');
const patientAdmissionController = require('../../controllers/AdminControllers/BillingManagement/patientAdmissionController');
const serviceController = require('../../controllers/AdminControllers/BillingManagement/serviceController');
const checkPermission = require('../../middlewares/permissionAuthorizer')
const authentication = require('../../middlewares/authenticate')



//Billing Routes
router.post('/createBilling',authentication.adminauthenticate,checkPermission('Billing Management','Create'), billingController.createBilling);
router.get('/getAllBillings',authentication.adminauthenticate,checkPermission('Billing Management','Read'), billingController.getAllBillings);
router.get('/getBilling/:id',authentication.adminauthenticate,checkPermission('Billing Management','Read'), billingController.getBilling);
router.put('/updateBilling/:id',authentication.adminauthenticate,checkPermission('Billing Management','Update'), billingController.updateBilling);
router.delete('/deleteBilling/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), billingController.deleteBilling);

//Advancepayment routes
router.post('/createAdvancePayment',authentication.adminauthenticate,checkPermission('Billing Management','Create'), advancePaymentController.createAdvancePayment);
router.get('/getAdvancePayments', authentication.adminauthenticate,checkPermission('Billing Management','Read'),advancePaymentController.getAdvancePayments);
router.get('/getAdvancePayment/:id',authentication.adminauthenticate,checkPermission('Billing Management','Read'), advancePaymentController.getAdvancePayment);
router.put('/updateAdvancePayment/:id', authentication.adminauthenticate,checkPermission('Billing Management','Update'),advancePaymentController.updateAdvancePayment);
router.delete('/deleteAdvancePayment/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), advancePaymentController.deleteAdvancePayment);

//PackageRoutes
router.post('/createPackage',authentication.adminauthenticate,checkPermission('Billing Management','Create'), packageController.createPackage);
router.get('/getPackages', authentication.adminauthenticate,checkPermission('Billing Management','Read'),packageController.getPackages);
router.get('/getPackage/:id', authentication.adminauthenticate,checkPermission('Billing Management','Read'),packageController.getPackage);
router.put('/updatePackage/:id', authentication.adminauthenticate,checkPermission('Billing Management','Update'),packageController.updatePackage);
router.delete('/deletePackage/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), packageController.deletePackage);

//patientAdmission Routes
router.post('/createAdmission', authentication.adminauthenticate,checkPermission('Billing Management','Create'),patientAdmissionController.createAdmission);
router.get('/getAdmissions',authentication.adminauthenticate,checkPermission('Billing Management','Read'), patientAdmissionController.getAdmissions);
router.get('/getAdmission/:id',authentication.adminauthenticate,checkPermission('Billing Management','Read'), patientAdmissionController.getAdmission);
router.put('/updateAdmission/:id', authentication.adminauthenticate,checkPermission('Billing Management','Update'),patientAdmissionController.updateAdmission);
router.delete('/deleteAdmission/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), patientAdmissionController.deleteAdmission);


//service routes
router.post('/createService/Add',authentication.adminauthenticate,checkPermission('Billing Management','Create'), serviceController.createService);
router.get('/getServices/All',authentication.adminauthenticate,checkPermission('Billing Management','Read'), serviceController.getServices);
router.get('/getService/:id', authentication.adminauthenticate,checkPermission('Billing Management','Read'),serviceController.getService);
router.put('/updateService/:id',authentication.adminauthenticate,checkPermission('Billing Management','Update'), serviceController.updateService);
router.delete('/deleteService/:id', authentication.adminauthenticate,checkPermission('Billing Management','Delete'),serviceController.deleteService);

module.exports = router;