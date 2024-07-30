const express = require('express');
const { createMedicine, getMedicines } = require('../../../controllers/AdminControllers/pharmacyManagement/medicineController');
const router = express.Router();

router.post('/', createMedicine);
router.get('/', getMedicines);

module.exports = router;
