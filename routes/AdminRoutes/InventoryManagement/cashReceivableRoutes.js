const express = require('express');
const router = express.Router();
const cashReceivableController = require('../../../controllers/AdminControllers/InventoryManagement/cashReceivableController');

router.post('/', cashReceivableController.createCashReceivable);
router.get('/', cashReceivableController.getAllCashReceivables);

module.exports = router;