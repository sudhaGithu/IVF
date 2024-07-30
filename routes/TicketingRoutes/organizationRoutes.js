const express = require('express');
const { createOrganization, getOrganizations } = require('../../controllers/TicketingControllers/organizationController');
const router = express.Router();

router.post('/', createOrganization);
router.get('/', getOrganizations);

module.exports = router;
