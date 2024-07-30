const express = require('express');
const { createPriority, getPriorities } = require('../../controllers/TicketingControllers/priorityController');
const router = express.Router();

router.post('/', createPriority);
router.get('/', getPriorities);

module.exports = router;
