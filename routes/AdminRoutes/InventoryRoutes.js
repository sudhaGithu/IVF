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
router.post('/invoice/Add',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), invoiceController.createInvoice);
router.get('/invoice/All',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), invoiceController.getAllInvoices);
router.get('/status/paid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), invoiceController.getPaidInvoices);
router.get('/status/unpaid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), invoiceController.getUnpaidInvoices);
// router.get('/invoice/:id', invoiceController.getInvoice);
router.put('/invoice/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Update'), invoiceController.updateInvoice);
router.delete('/invoice/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Delete'), invoiceController.deleteInvoice);

//expensetype Routes
router.post('/expense-type/Add', authentication.adminauthenticate,checkPermission('Inventory Management','Create'),expenseTypeController.createExpenseType);
router.put('/expense-type/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Update'), expenseTypeController.updateExpenseType);
router.get('/expense-types/All',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseTypeController.getAllExpenseTypes);
router.get('/expense-type/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseTypeController.getExpenseType);
router.delete('/expense-type/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Delete'),expenseTypeController.deleteExpenseType);

//expenseincoice Routes
router.post('/expenseincoice/Add',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), expenseInvoiceController.createExpenseInvoice);
router.get('/expenseincoice/All',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseInvoiceController.getAllExpenseInvoices);
router.get('/expenseincoice/paid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), expenseInvoiceController.getPaidExpenses); 
router.get('/expenseincoice/unpaid', authentication.adminauthenticate,checkPermission('Inventory Management','Read'),expenseInvoiceController.getUnpaidExpenses); 
router.get('/expenseincoice/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Read'),expenseInvoiceController.getExpenseInvoice);
router.put('/expenseincoice/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Update'),expenseInvoiceController.updateExpenseInvoice);
router.delete('/expenseincoice/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Delete'),expenseInvoiceController.deleteExpenseInvoice);


//Customer routes
router.post('/Customer/Add',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), customerController.createCustomer);    
router.get('/Customer/All', authentication.adminauthenticate,checkPermission('Inventory Management','Read'),customerController.getAllCustomers);
// router.get('/:id', customerController.getCustomer);
router.put('/Customer/:id', authentication.adminauthenticate,checkPermission('Inventory Management','Update'),customerController.updateCustomer);
router.delete('/Customer/:id',authentication.adminauthenticate,checkPermission('Inventory Management','Delete'), customerController.deleteCustomer);
router.get('/Customer/paid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'),customerController.getPaidCustomeres);
router.get('/Customer/unpaid',authentication.adminauthenticate,checkPermission('Inventory Management','Read'),customerController.getUnpaidCustomers);

//Cashrecievable Routes
router.post('/Cashrecievable/Add',authentication.adminauthenticate,checkPermission('Inventory Management','Create'), cashReceivableController.createCashReceivable);
router.get('/Cashrecievable/All',authentication.adminauthenticate,checkPermission('Inventory Management','Read'), cashReceivableController.getAllCashReceivables);


module.exports = router;