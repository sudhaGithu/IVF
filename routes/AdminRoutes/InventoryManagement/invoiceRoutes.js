const express = require('express');
const router = express.Router();
const invoiceController = require('../../../controllers/AdminControllers/InventoryManagement/invoiceController');

router.post('/', invoiceController.createInvoice);
router.get('/', invoiceController.getAllInvoices);
router.get('/status/paid', invoiceController.getPaidInvoices);
router.get('/status/unpaid', invoiceController.getUnpaidInvoices);
// router.get('/:id', invoiceController.getInvoice);
router.put('/:id', invoiceController.updateInvoice);
router.delete('/:id', invoiceController.deleteInvoice);

module.exports = router;
