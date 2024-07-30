const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');
//const authUser = require('../middleware/authenticateToken')


router.get('/allstates/:id', stateController.getstatesBycountry);

module.exports = router;

//1