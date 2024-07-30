const express = require('express');
const { createType, getTypes } = require('../../controllers/TicketingControllers/typeController');
const router = express.Router();

router.post('/', createType);
router.get('/', getTypes);

module.exports = router;
