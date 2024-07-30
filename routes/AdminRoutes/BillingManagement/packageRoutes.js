const express = require('express');
const { createPackage, getPackages, getPackage, updatePackage, deletePackage } = require('../../../controllers/AdminControllers/BillingManagement/packageController');
const router = express.Router();

router.post('/', createPackage);
router.get('/', getPackages);
router.get('/:id', getPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
