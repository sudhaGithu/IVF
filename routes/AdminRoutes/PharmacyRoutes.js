const express = require('express');
const multer = require('multer');
const path = require('path');
const LeafController = require('../../controllers/AdminControllers/pharmacyManagement/leafController');
const medicineController = require('../../controllers/AdminControllers/pharmacyManagement/medicineController');
const TypeController = require('../../controllers/AdminControllers/pharmacyManagement/pharmtypeController');
const unitController = require('../../controllers/AdminControllers/pharmacyManagement/unitController');
const vendorController = require('../../controllers/AdminControllers/pharmacyManagement/vendorController');
const MedicineCategoryController = require('../../controllers/AdminControllers/pharmacyManagement/medicineCategoryController');
const checkPermission = require('../../middlewares/permissionAuthorizer')
const authentication = require('../../middlewares/authenticate')



const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/medicine-categories', authentication.adminauthenticate,checkPermission('Pharmacy Management','Create'),upload.fields([{ name: 'categoryImage' }, { name: 'bannerImage' }]), MedicineCategoryController.createMedicineCategory);
router.get('/medicine-categories',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), MedicineCategoryController.getAllMedicineCategories);
router.get('/medicine-categories/:id', authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'),MedicineCategoryController.getMedicineCategoryById);
router.put('/medicine-categories/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Update'), upload.fields([{ name: 'categoryImage' }, { name: 'bannerImage' }]), MedicineCategoryController.updateMedicineCategory);
router.delete('/medicine-categories/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Delete'), MedicineCategoryController.deleteMedicineCategory);


// Routes for Leaf CRUD operations
router.post('/leaf',authentication.adminauthenticate,checkPermission('Pharmacy Management','Create'), LeafController.createLeaf);
router.get('/leaves',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), LeafController.getAllLeaves);
router.get('/leaf/:id', authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'),LeafController.getLeafById);
router.put('/leaf/:id', authentication.adminauthenticate,checkPermission('Pharmacy Management','Update'),LeafController.updateLeaf);
router.delete('/leaf/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Delete'), LeafController.deleteLeaf);

//medicine Routes
router.post('/medicine/Add',authentication.adminauthenticate,checkPermission('Pharmacy Management','Create'), medicineController.createMedicine);
router.get('/medicine/All',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), medicineController.getAllMedicines);
router.put('/medicine',authentication.adminauthenticate,checkPermission('Pharmacy Management','Update'), medicineController.updateMedicine);
router.delete('/medicine',authentication.adminauthenticate,checkPermission('Pharmacy Management','Delete'), medicineController.deleteMedicine);
router.get('/medicine/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), medicineController.getMedicineById);


// Routes for pharnaType CRUD operations
router.post('/type',authentication.adminauthenticate,checkPermission('Pharmacy Management','Create'), TypeController.createType);
router.get('/types',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), TypeController.getAllTypes);
router.get('/type/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), TypeController.getTypeById);
router.put('/type/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Update'), TypeController.updateType);
router.delete('/type/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Delete'), TypeController.deleteType);

// Routes for Type CRUD operations
router.post('/unit',authentication.adminauthenticate,checkPermission('Pharmacy Management','Create'), unitController.createUnit);
router.get('/units',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), unitController.getAllUnits);
router.get('/unit/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), unitController.getUnitById);
router.put('/unit/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Update'), unitController.updateUnit);
router.delete('/unit/:id',authentication.adminauthenticate,checkPermission('Pharmacy Management','Delete'), unitController.deleteUnit);

//VendorRoutes
router.post('/Add',authentication.adminauthenticate,checkPermission('Pharmacy Management','Create'), vendorController.createVendor);
router.get('/list',authentication.adminauthenticate,checkPermission('Pharmacy Management','Read'), vendorController.getVendors);
router.put('/edit', authentication.adminauthenticate,checkPermission('Pharmacy Management','Update'),vendorController.updateVendor);
router.delete('deleet',authentication.adminauthenticate,checkPermission('Pharmacy Management','Delete'), vendorController.deleteVendor);


module.exports = router;
