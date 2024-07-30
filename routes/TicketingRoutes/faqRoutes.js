const express = require('express');
const { createFAQ, getFAQs } = require('../../controllers/TicketingControllers/faqController');
const router = express.Router();

router.post('/', createFAQ);
router.get('/', getFAQs);

module.exports = router;
