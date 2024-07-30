const express = require('express');
const {createBilling,getBilling,getAllBillings,updateBilling,deleteBilling} = require('../../../controllers/AdminControllers/BillingManagement/billingController');
const router = express.Router();

router.post('/', createBilling);
router.get('/', getAllBillings);
router.get('/:id', getBilling);
router.put('/:id', updateBilling);
router.delete('/:id', deleteBilling);

module.exports = router;
