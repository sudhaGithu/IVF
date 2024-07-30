const express = require('express');
const roleController = require('../../controllers/TicketingControllers/roleController');
const router = express.Router();

router.post('/', roleController.createRole);
router.get('/', roleController.getRoles);

module.exports = router;
