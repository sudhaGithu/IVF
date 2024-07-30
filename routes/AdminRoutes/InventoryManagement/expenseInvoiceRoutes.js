const express = require('express');
const router = express.Router();
const expenseInvoiceController = require('../../../controllers/AdminControllers/InventoryManagement/expenseInvoiceController');

router.post('/', expenseInvoiceController.createExpenseInvoice);
router.get('/', expenseInvoiceController.getAllExpenseInvoices);
router.get('/paid', expenseInvoiceController.getPaidExpenses); 
router.get('/unpaid', expenseInvoiceController.getUnpaidExpenses); 
router.get('/:id', expenseInvoiceController.getExpenseInvoice);
router.put('/:id', expenseInvoiceController.updateExpenseInvoice);
router.delete('/:id', expenseInvoiceController.deleteExpenseInvoice);

module.exports = router;
