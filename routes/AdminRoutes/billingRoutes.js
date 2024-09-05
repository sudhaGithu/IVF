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
router.post('/Billing/Add',authentication.adminauthenticate,checkPermission('Billing Management','Create'), billingController.createBilling);
router.get('/Billing/All',authentication.adminauthenticate,checkPermission('Billing Management','Read'), billingController.getAllBillings);
router.get('/Billing/:id',authentication.adminauthenticate,checkPermission('Billing Management','Read'), billingController.getBilling);
router.put('/Billing/:id',authentication.adminauthenticate,checkPermission('Billing Management','Update'), billingController.updateBilling);
router.delete('/Billing/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), billingController.deleteBilling);

//Advancepayment routes
router.post('/Advancepayment/Add',authentication.adminauthenticate,checkPermission('Billing Management','Create'), advancePaymentController.createAdvancePayment);
router.get('/Advancepayment/All', authentication.adminauthenticate,checkPermission('Billing Management','Read'),advancePaymentController.getAdvancePayments);
router.get('/Advancepayment/:id',authentication.adminauthenticate,checkPermission('Billing Management','Read'), advancePaymentController.getAdvancePayment);
router.put('/Advancepayment/:id', authentication.adminauthenticate,checkPermission('Billing Management','Update'),advancePaymentController.updateAdvancePayment);
router.delete('/Advancepayment/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), advancePaymentController.deleteAdvancePayment);

//PackageRoutes
router.post('/Package/Add',authentication.adminauthenticate,checkPermission('Billing Management','Create'), packageController.createPackage);
router.get('/Package/All', authentication.adminauthenticate,checkPermission('Billing Management','Read'),packageController.getPackages);
router.get('/Package/:id', authentication.adminauthenticate,checkPermission('Billing Management','Read'),packageController.getPackage);
router.put('/Package/:id', authentication.adminauthenticate,checkPermission('Billing Management','Update'),packageController.updatePackage);
router.delete('/Package/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), packageController.deletePackage);

//patientAdmission Routes
router.post('/patientAdmission/Add', authentication.adminauthenticate,checkPermission('Billing Management','Create'),patientAdmissionController.createAdmission);
router.get('/patientAdmission/All',authentication.adminauthenticate,checkPermission('Billing Management','Read'), patientAdmissionController.getAdmissions);
router.get('/patientAdmission/:id',authentication.adminauthenticate,checkPermission('Billing Management','Read'), patientAdmissionController.getAdmission);
router.put('/patientAdmission/:id', authentication.adminauthenticate,checkPermission('Billing Management','Update'),patientAdmissionController.updateAdmission);
router.delete('/patientAdmission/:id',authentication.adminauthenticate,checkPermission('Billing Management','Delete'), patientAdmissionController.deleteAdmission);


//service routes
router.post('/service/Add',authentication.adminauthenticate,checkPermission('Billing Management','Create'), serviceController.createService);
router.get('/service/All',authentication.adminauthenticate,checkPermission('Billing Management','Read'), serviceController.getServices);
router.get('/service/:id', authentication.adminauthenticate,checkPermission('Billing Management','Read'),serviceController.getService);
router.put('/service/:id',authentication.adminauthenticate,checkPermission('Billing Management','Update'), serviceController.updateService);
router.delete('/service/:id', authentication.adminauthenticate,checkPermission('Billing Management','Delete'),serviceController.deleteService);

module.exports = router;
