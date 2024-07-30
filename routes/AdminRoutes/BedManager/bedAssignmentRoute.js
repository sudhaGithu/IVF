// app/routes/bedAssignmentRoutes.js
const express = require('express');
const { createBedAssignment, getBedAssignments, getBedAssignmentById, updateBedAssignment, deleteBedAssignment } = require('../../../controllers/AdminControllers/BedManager/bedAssignmentController');
const authenticate = require('../../../middlewares/authenticate');
const authorize = require('../../../middlewares/authorization');

const router = express.Router();

router.post('/bed-assignments',  createBedAssignment);
router.get('/bed-assignments',  getBedAssignments);
router.get('/bed-assignments/:id', authenticate, authorize('superAdmin', 'read'), getBedAssignmentById);
router.put('/bed-assignments/:id', authenticate, authorize('superAdmin', 'write'), updateBedAssignment);
router.delete('/bed-assignments/:id', authenticate, authorize('superAdmin', 'write'), deleteBedAssignment);

module.exports = router;
