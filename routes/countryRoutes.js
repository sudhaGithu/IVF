const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');
//const authUser = require('../middleware/authenticateToken')


router.get('/allcountry', countryController.getAllCountry);
router.get('/countrybyid/:id', countryController.getCountryById)


module.exports = router;

//2