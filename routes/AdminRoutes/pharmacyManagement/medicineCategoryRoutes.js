const express = require('express');
const { createMedicineCategory, getMedicineCategories, getMedicineCategory, updateMedicineCategory, deleteMedicineCategory } = require('../../../controllers/AdminControllers/pharmacyManagement/medicineCategoryController');
const router = express.Router();

router.post('/', createMedicineCategory);
router.get('/', getMedicineCategories);
router.get('/:id', getMedicineCategory);
router.put('/:id', updateMedicineCategory);
router.delete('/:id', deleteMedicineCategory);

module.exports = router;
