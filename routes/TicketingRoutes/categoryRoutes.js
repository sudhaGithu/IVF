const express = require('express');
const categoryController = require('../../controllers/TicketingControllers/categoryController');
const router = express.Router();

router.post('/', categoryController.createCategory);

module.exports = router;
