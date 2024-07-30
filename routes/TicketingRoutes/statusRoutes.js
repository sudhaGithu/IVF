const express = require('express');
const { createStatus } = require('../../controllers/TicketingControllers/statusController');
const router = express.Router();

router.post('/', createStatus);

module.exports = router;
