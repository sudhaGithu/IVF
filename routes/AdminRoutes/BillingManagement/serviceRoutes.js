const express = require('express');
const { createService, getServices, getService, updateService, deleteService } = require('../../../controllers/AdminControllers/BillingManagement/serviceController');
const router = express.Router();

router.post('/', createService);
router.get('/', getServices);
router.get('/:id', getService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;
