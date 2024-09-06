// 

const express = require('express');
const router = express.Router();
const cashReceivableController = require('../../controllers/AdminControllers/InventoryManagement/cashReceivableController');
const customerController = require('../../controllers/AdminControllers/InventoryManagement/customerController');
const expenseInvoiceController = require('../../controllers/AdminControllers/InventoryManagement/expenseInvoiceController');
const expenseTypeController = require('../../controllers/AdminControllers/InventoryManagement/expenseTypeController');
const invoiceController = require('../../controllers/AdminControllers/InventoryManagement/invoiceController');
const checkPermission = require('../../middlewares/permissionAuthorizer')
const authentication = require('../../middlewares/authenticate')


//invoice Routes
router.post('/createInvoice',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), invoiceController.createInvoice);
router.get('/getAllInvoices',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), invoiceController.getAllInvoices);
router.get('/getPaidInvoices/paid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), invoiceController.getPaidInvoices);
router.get('/getUnpaidInvoices/unpaid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), invoiceController.getUnpaidInvoices);
// router.get('/invoice/:id', invoiceController.getInvoice);
router.put('/updateInvoice/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Update'), invoiceController.updateInvoice);
router.delete('/deleteInvoice/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Delete'), invoiceController.deleteInvoice);

//expensetype Routes
router.post('/createExpenseType', authentication.adminauthenticate,checkPermission('Inventory Management','Create'),expenseTypeController.createExpenseType);
router.put('/updateExpenseType/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Update'), expenseTypeController.updateExpenseType);
router.get('/getAllExpenseTypes',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseTypeController.getAllExpenseTypes);
router.get('/getExpenseType/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseTypeController.getExpenseType);
router.delete('/deleteExpenseType/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Delete'),expenseTypeController.deleteExpenseType);

//expenseincoice Routes
router.post('/createExpenseInvoice',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), expenseInvoiceController.createExpenseInvoice);
router.get('/getAllExpenseInvoices',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseInvoiceController.getAllExpenseInvoices);
router.get('/getPaidExpenses/paid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseInvoiceController.getPaidExpenses); 
router.get('/getUnpaidExpenses/unpaid', authentication.adminauthenticate,checkPermission('Inventory Management','Read'),expenseInvoiceController.getUnpaidExpenses); 
router.get('/getExpenseInvoice/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Read'),expenseInvoiceController.getExpenseInvoice);
router.put('/updateExpenseInvoice/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Update'),expenseInvoiceController.updateExpenseInvoice);
router.delete('/deleteExpenseInvoice/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Delete'),expenseInvoiceController.deleteExpenseInvoice);


//Customer routes
router.post('/createCustomer/Add',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), customerController.createCustomer);    
router.get('/getAllCustomers', authentication.adminauthenticate,checkPermission('Inventory Management','Read'),customerController.getAllCustomers);
// router.get('/:id', customerController.getCustomer);
router.put('/updateCustomer/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Update'),customerController.updateCustomer);
router.delete('/deleteCustomer/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Delete'), customerController.deleteCustomer);
router.get('/getPaidCustomeres/paid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'),customerController.getPaidCustomeres);
router.get('/getUnpaidCustomers/unpaid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'),customerController.getUnpaidCustomers);

//Cashrecievable Routes
router.post('/createCashReceivable',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), cashReceivableController.createCashReceivable);
router.get('/getAllCashReceivables',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), cashReceivableController.getAllCashReceivables);


module.exports = router;