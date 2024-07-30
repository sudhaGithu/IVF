const express = require('express');
const { updateDefaultEmailRecipient, getDefaultEmailRecipient } = require('../../controllers/TicketingControllers/settingsController');
const router = express.Router();

router.put('/default-email-recipient', updateDefaultEmailRecipient);
router.get('/default-email-recipient', getDefaultEmailRecipient);

module.exports = router;
