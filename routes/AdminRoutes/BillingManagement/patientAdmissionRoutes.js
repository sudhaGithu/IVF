const express = require('express');
const { createAdmission, getAdmissions, getAdmission, updateAdmission, deleteAdmission } = require('../../../controllers/AdminControllers/BillingManagement/patientAdmissionController');
const router = express.Router();

router.post('/', createAdmission);
router.get('/', getAdmissions);
router.get('/:id', getAdmission);
router.put('/:id', updateAdmission);
router.delete('/:id', deleteAdmission);

module.exports = router;
