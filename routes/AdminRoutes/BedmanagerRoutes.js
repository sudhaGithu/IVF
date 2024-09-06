// // app/routes/bedRoutes.js
// const express = require('express');
// const bedController = require('../../controllers/AdminControllers/BedManager/bedController');
// const bedAssignmentController = require('../../controllers/AdminControllers/BedManager/bedAssignmentController');
// const roomController = require('../../controllers/AdminControllers/BedManager/roomController');
// const checkPermission = require('../../middlewares/permissionAuthorizer')
// const authentication = require('../../middlewares/authenticate')

// const router = express.Router();

// //bed Routes
// router.post('/beds/Add',authentication.adminauthenticate,checkPermission('Bed Manager','Create'), bedController.createBed);
// router.get('/beds/All', authentication.adminauthenticate,checkPermission('Bed Manager','Read'), bedController.getBeds);
// router.get('/beds/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Read'), bedController.getBedById);
// router.put('/beds/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Update'), bedController.updateBed);
// router.delete('/beds/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Delete'), bedController.deleteBed);

// //bedAssignmentRoutes
// router.post('/bed-assignments/Add', authentication.adminauthenticate,checkPermission('Bed Manager','Create'), bedAssignmentController.createBedAssignment);
// router.get('/bed-assignments/All',authentication.adminauthenticate,checkPermission('Bed Manager','Read'),  bedAssignmentController.getBedAssignments);
// router.get('/bed-assignments/:id', authentication.adminauthenticate,checkPermission('Bed Manager','Read'),bedAssignmentController.getBedAssignmentById);
// router.put('/bed-assignments/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Update'), bedAssignmentController.updateBedAssignment);
// router.delete('/bed-assignments/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Delete'),bedAssignmentController.deleteBedAssignment);

// //Room routes
// router.post('/rooms/Add',authentication.adminauthenticate,checkPermission('Bed Manager','Create'), roomController.createRoom);
// router.get('/rooms/All',authentication.adminauthenticate,checkPermission('Bed Manager','Read'),  roomController.getRooms);
// router.get('/rooms/:id', authentication.adminauthenticate,checkPermission('Bed Manager','Read'), roomController.getRoomById);
// router.put('/rooms/:id', authentication.adminauthenticate,checkPermission('Bed Manager','Update'), roomController.updateRoom);
// router.delete('/rooms/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Delete'), roomController.deleteRoom);

// module.exports = router;
// app/routes/bedRoutes.js
const express = require('express');
const bedController = require('../../controllers/AdminControllers/BedManager/bedController');
const bedAssignmentController = require('../../controllers/AdminControllers/BedManager/bedAssignmentController');
const roomController = require('../../controllers/AdminControllers/BedManager/roomController');
const checkPermission = require('../../middlewares/permissionAuthorizer')
const authentication = require('../../middlewares/authenticate')

const router = express.Router();

//bed Routes
router.post('/createBed',authentication.adminauthenticate,checkPermission('Bed Manager','Create'), bedController.createBed);
router.get('/getBeds', authentication.adminauthenticate,checkPermission('Bed Manager','Read'), bedController.getBeds);
router.get('/getbedsbyid/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Read'), bedController.getBedById);
router.put('/updatebed/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Update'), bedController.updateBed);
router.delete('/deletebed/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Delete'), bedController.deleteBed);

//bedAssignmentRoutes
router.post('/createBedAssignment', authentication.adminauthenticate,checkPermission('Bed Manager','Create'), bedAssignmentController.createBedAssignment);
router.get('getBedAssignments',authentication.adminauthenticate,checkPermission('Bed Manager','Read'),  bedAssignmentController.getBedAssignments);
router.get('/getBedAssignmentById/:id', authentication.adminauthenticate,checkPermission('Bed Manager','Read'),bedAssignmentController.getBedAssignmentById);
router.put('/updateBedAssignment/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Update'), bedAssignmentController.updateBedAssignment);
router.delete('/deleteBedAssignment/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Delete'),bedAssignmentController.deleteBedAssignment);

//Room routes
router.post('/createRoom',authentication.adminauthenticate,checkPermission('Bed Manager','Create'), roomController.createRoom);
router.get('/getRooms',authentication.adminauthenticate,checkPermission('Bed Manager','Read'),  roomController.getRooms);
router.get('/getRoomById/:id', authentication.adminauthenticate,checkPermission('Bed Manager','Read'), roomController.getRoomById);
router.put('/updateRoom/:id', authentication.adminauthenticate,checkPermission('Bed Manager','Update'), roomController.updateRoom);
router.delete('/deleteRoom/:id',authentication.adminauthenticate,checkPermission('Bed Manager','Delete'), roomController.deleteRoom);

module.exports = router;