// app/routes/AdminRoutes/timeSlotRoutes.js
const express = require('express');
const { createTimeSlot, getTimeSlots, getTimeSlotById, updateTimeSlot, deleteTimeSlot } = require('../../../controllers/AdminControllers/Schedule/timeSlotController');
const authenticate = require('../../../middlewares/authenticate');  // Adjusted path
const authorize = require('../../../middlewares/authorization');    // Adjusted path

const router = express.Router();

router.post('/time-slots', createTimeSlot);
router.get('/time-slots',  getTimeSlots);  
router.get('/time-slots/:id', authenticate, authorize('BranchAdmin', 'read'), getTimeSlotById);
router.put('/time-slots/:id', authenticate, authorize('BranchAdmin', 'write'), updateTimeSlot);
router.delete('/time-slots/:id', authenticate, authorize('BranchAdmin', 'write'), deleteTimeSlot);

module.exports = router;
