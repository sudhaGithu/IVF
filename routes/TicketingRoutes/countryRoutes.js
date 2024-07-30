const express = require('express');
const { createCountry, getCountries } = require('../../controllers/TicketingControllers/countryController');
const router = express.Router();

router.post('/', createCountry);
router.get('/', getCountries);

module.exports = router;
