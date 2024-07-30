// app/routes/roomRoutes.js
const express = require('express');
const { createRoom, getRooms, getRoomById, updateRoom, deleteRoom } = require('../../../controllers/AdminControllers/BedManager/roomController');
const authenticate = require('../../../middlewares/authenticate');
const authorize = require('../../../middlewares/authorization');

const router = express.Router();

router.post('/rooms', createRoom);
router.get('/rooms',  getRooms);
router.get('/rooms/:id', authenticate, authorize('superAdmin', 'read'), getRoomById);
router.put('/rooms/:id', authenticate, authorize('superAdmin', 'write'), updateRoom);
router.delete('/rooms/:id', deleteRoom);

module.exports = router;
