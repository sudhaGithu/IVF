// app/routes/scheduleRoutes.js
const express = require('express');
const { createSchedule, getSchedules, getScheduleById, updateSchedule, deleteSchedule } = require('../../../controllers/AdminControllers/Schedule/scheduleController');
const authenticate = require('../../../middlewares/authenticate');
const authorize = require('../../../middlewares/authorization');

const router = express.Router();

router.post('/schedules',  createSchedule);
router.get('/schedules', getSchedules);
router.get('/schedules/:id', authenticate, authorize('superAdmin', 'read'), getScheduleById);
router.put('/schedules/:id', authenticate, authorize('superAdmin', 'write'), updateSchedule);
router.delete('/schedules/:id', authenticate, authorize('superAdmin', 'write'), deleteSchedule);

module.exports = router;
