const express = require('express');
const router = express.Router();
const customerController = require('../../../controllers/AdminControllers/InventoryManagement/customerController');

router.post('/', customerController.createCustomer);    
router.get('/', customerController.getAllCustomers);
// router.get('/:id', customerController.getCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('/paid',customerController.getPaidCustomeres);
router.get('/unpaid',customerController.getUnpaidCustomers);

module.exports = router;
