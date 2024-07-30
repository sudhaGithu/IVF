// app/routes/bedRoutes.js
const express = require('express');
const { createBed, getBeds, getBedById, updateBed, deleteBed } = require('../../../controllers/AdminControllers/BedManager/bedController');
const authenticate = require('../../../middlewares/authenticate');
const authorize = require('../../../middlewares/authorization');

const router = express.Router();

router.post('/beds', createBed);
router.get('/beds',  getBeds);
router.get('/beds/:id', authenticate, authorize('superAdmin', 'read'), getBedById);
router.put('/beds/:id', authenticate, authorize('superAdmin', 'write'), updateBed);
router.delete('/beds/:id', authenticate, authorize('superAdmin', 'write'), deleteBed);

module.exports = router;
