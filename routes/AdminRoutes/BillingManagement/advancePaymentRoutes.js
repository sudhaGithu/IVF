const express = require('express');
const { createAdvancePayment, getAdvancePayments, getAdvancePayment, updateAdvancePayment, deleteAdvancePayment } = require('../../../controllers/AdminControllers/BillingManagement/advancePaymentController');
const router = express.Router();

router.post('/', createAdvancePayment);
router.get('/', getAdvancePayments);
router.get('/:id', getAdvancePayment);
router.put('/:id', updateAdvancePayment);
router.delete('/:id', deleteAdvancePayment);

module.exports = router;
