// app/routes/scheduleRoutes.js
const express = require('express');
const scheduleController = require('../../controllers/AdminControllers/Schedule/scheduleController');
const timeSlotController = require('../../controllers/AdminControllers/Schedule/timeSlotController');
const checkPermission = require('../../middlewares/permissionAuthorizer')
const authentication = require('../../middlewares/authenticate')

const router = express.Router();

//timeSlot Routes
router.post('/time-slots', authentication.adminauthenticate,checkPermission('Schedule','Create'), timeSlotController.createTimeSlot);
router.get('/time-slots', authentication.adminauthenticate,checkPermission('Schedule','Read'), timeSlotController.getTimeSlots);  
router.get('/time-slots/:id',authentication.adminauthenticate,checkPermission('Schedule','Read'), timeSlotController.getTimeSlotById);
router.put('/time-slots/:id',authentication.adminauthenticate,checkPermission('Schedule','Update'), timeSlotController.updateTimeSlot);
router.delete('/time-slots/:id',authentication.adminauthenticate,checkPermission('Schedule','delete'),timeSlotController.deleteTimeSlot);

//schedule Routes
router.post('/schedules', authentication.adminauthenticate,checkPermission('Schedule','Create'), scheduleController.createSchedule);
router.get('/schedules',authentication.adminauthenticate,checkPermission('Schedule','Read'), scheduleController.getSchedules);
router.get('/schedules/:id', authentication.adminauthenticate,checkPermission('Schedule','Read'), scheduleController.getScheduleById);
router.put('/schedules/:id',authentication.adminauthenticate,checkPermission('Schedule','Update'),scheduleController.updateSchedule);
router.delete('/schedules/:id',authentication.adminauthenticate,checkPermission('Schedule','delete'), scheduleController.deleteSchedule);

module.exports = router;
