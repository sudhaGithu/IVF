const express = require('express');
const { createDepartment, getDepartments } = require('../../controllers/TicketingControllers/departmentController');
const router = express.Router();

router.post('/', createDepartment);
router.get('/', getDepartments);

module.exports = router;
