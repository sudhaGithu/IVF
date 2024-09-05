const express = require('express');
const router = express.Router();

const branchController = require('../controllers/branchController')

const adminController = require('../controllers/adminController')
const countryController = require('../controllers/countryController')
const stateController = require('../controllers/stateController')
const patientController = require('../controllers/patientController')
const departmentController = require('../controllers/departmentController')
//const rolesController = require('../controllers/roleController')
const employeeController = require('../controllers/employeeController')
const treatmentController = require('../controllers/treatment')
const insuranceController = require('../controllers/insuranceController')
const limitApprovalController = require('../controllers/limitApprovalController')
const bookingController = require('../controllers/bookingsController')
const supplierController = require('../controllers/supplierController');
const categoryController = require('../controllers/categoriesController');
const warehouseController = require('../controllers/warehouseController');
const supplierInvoice =  require('../controllers/supplierInvoiceController')
const productController = require('../controllers/productsController')
const checkPermission = require('../middlewares/permissionAuthorizer')
const authorization = require('../middlewares/authenticate')
const { upload } = require('../middlewares/fileupload')


//admin login
router.post('/login', adminController.loginAdmin)


// to add country
router.post('/addcountry', countryController.createCountry)
router.delete('/deletecountry/:id', countryController.deleteCountry)


//to add state
router.post('/addstate/:id', stateController.createState)
router.delete('/deletestate/:id', stateController.deleteStateById)
router.get('/getstatebyid/:id', stateController.getStateById)


// branch routes
// Routes for Branch CRUD operations
router.get('/allbranches',authorization.adminauthenticate ,checkPermission('Branches','Read'), branchController.getAllBranches);
router.get('/branchbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), branchController.getBranchById);
router.post('/addbranch',authorization.adminauthenticate ,checkPermission('Branches','Create'), branchController.createBranch);
router.put('/updatebranch/:id',authorization.adminauthenticate ,checkPermission('Branches','Update'), branchController.updateBranch);
router.delete('/deletebranch/:id',authorization.adminauthenticate ,checkPermission('Branches','Delete'), branchController.deleteBranch);
router.post('/branchstatus/:id',authorization.adminauthenticate ,checkPermission('Branches','Update'), branchController.updateBranchStatus);


//patient routes
// Routes
router.post('/addpatient',authorization.adminauthenticate ,checkPermission('Branches','Read'), patientController.createPatient);
router.get('/getallpatients', authorization.adminauthenticate ,checkPermission('Branches','Read'),patientController.getAllPatients);
router.get('/getpatientbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), patientController.getPatientbyId);
router.put('/updatepatient/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), patientController.updatePatient);
router.delete('/deletepatient/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), patientController.deletePatientById);

// department routes
// Define routes
router.post('/departments/createdepartment',authorization.adminauthenticate ,checkPermission('Branches','Read'), departmentController.createDepartment);
router.get('/departments/alldepartments',authorization.adminauthenticate ,checkPermission('Branches','Read'), departmentController.getAllDepartments);
router.get('/departments/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), departmentController.getDepartmentById);
router.put('/departments/update/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), departmentController.updateDepartment);
router.put('/departments/status/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'),departmentController.DepartmentStatus);
router.delete('/departments/delete/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), departmentController.deleteDepartment)


//role routes
// // Define routes
// router.post('/roles/createrole', rolesController.createRole);
// router.get('/roles/getallroles', rolesController.getAllRoles);
// router.get('/roles/getrolebyid/:id', rolesController.getRoleById);
// router.put('/roles/updaterole/:id', rolesController.updateRole);
// router.put('/roles/status/:id', rolesController.roleStatus)
// router.delete('/roles/deleterole/:id', rolesController.deleterole)

// Routes for Employee CRUD operations
router.post('/employees/create', authorization.adminauthenticate ,checkPermission('Branches','Read'),employeeController.createEmployee);
router.get('/employees/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), employeeController.getEmployeeById);
router.put('/employees/updatebyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), employeeController.updateEmployee);
router.delete('/employees/delete/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), employeeController.deleteEmployee);
router.get('/employees/getall', authorization.adminauthenticate ,checkPermission('Branches','Read'),employeeController.getAllEmployees)
router.put('/employees/status/:id' , authorization.adminauthenticate ,checkPermission('Branches','Read'),employeeController.EmployeeStatus)


// Routes for treatment model
router.post('/treatment/createtreatment',authorization.adminauthenticate ,checkPermission('Branches','Read'), upload.single('image'),treatmentController.createTreatment)
router.get('/treatment/getall',authorization.adminauthenticate ,checkPermission('Branches','Read'), treatmentController.getallTreatments)
router.get('/treatmentbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), treatmentController.getTreatmentById)
router.put('/updatetreatment/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), treatmentController.updateTreatment)
router.put('/treatment/status/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), treatmentController.treatmentStatus)
router.delete('/treatment/deletetreatment/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), treatmentController.deleteTreatment)


//Routes for insurance model
router.post('/insurance/createinsurance',authorization.adminauthenticate ,checkPermission('Branches','Read'), insuranceController.createInsurance)
router.get('/insurance/getallinsurances',authorization.adminauthenticate ,checkPermission('Branches','Read'), insuranceController.getAllInsurances)
router.get('/insurance/getbyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),insuranceController.getInsuranceById)
router.delete('/insurance/deletebyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), insuranceController.deleteInsuranceById)
router.put('/insurance/updatebyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),insuranceController.updateInsuranceById)


// Routes for limitApproval
router.post('/limitapproval/create',authorization.adminauthenticate ,checkPermission('Branches','Read'), limitApprovalController.createInsuranceClaim);
router.get('/limitapproval/getall', authorization.adminauthenticate ,checkPermission('Branches','Read'),limitApprovalController.getAllInsuranceClaims);
router.get('/limitapproval/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), limitApprovalController.getInsuranceClaimById);
router.put('/limitapproval/update/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),limitApprovalController.updateInsuranceClaimById);
router.delete('/limitapproval/delete/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), limitApprovalController.deleteInsuranceClaimById);


// Routes for bookings
router.post('/bookings/create',authorization.adminauthenticate ,checkPermission('Branches','Read'), bookingController.createOrder);
router.get('/bookings/getall',authorization.adminauthenticate ,checkPermission('Branches','Read'), bookingController.getOrders);
router.get('/bookings/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), bookingController.getOrder);
router.put('/bookings/updatebyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), bookingController.updateOrder);
router.delete('/bookings/delete/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), bookingController.deleteOrder);






//inventory management
//Routes for suppliers
router.post('/suppliers/create', authorization.adminauthenticate ,checkPermission('Branches','Read'),supplierController.createSupplier);
router.get('/suppliers/getall', authorization.adminauthenticate ,checkPermission('Branches','Read'),supplierController.getAllSuppliers);
router.get('/suppliers/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), supplierController.getSupplierById);
router.put('/suppliers/updatebyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),supplierController.updateSupplierById);
router.delete('/suppliers/deletebyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), supplierController.deleteSupplierById);


//Routes for categories
router.post('/categories/create', authorization.adminauthenticate ,checkPermission('Branches','Read'),categoryController.createCategory);
router.get('/categories/getall', authorization.adminauthenticate ,checkPermission('Branches','Read'),categoryController.getAllCategories);
router.get('/categories/getbyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),categoryController.getCategoryById);
router.put('/categories/updatebyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), categoryController.updateCategoryById);
router.delete('/categories/deletebyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),categoryController.deleteCategoryById);


// Routes  for WareHouse
router.post('/warehouses/create', authorization.adminauthenticate ,checkPermission('Branches','Read'),warehouseController.createWarehouse);
router.get('/warehouses/getall', authorization.adminauthenticate ,checkPermission('Branches','Read'),warehouseController.getAllWarehouses);
router.get('/warehouses/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), warehouseController.getWarehouseById);
router.put('/warehouses/updatebyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),warehouseController.updateWarehouseById);
router.delete('/warehouses/deletebyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),warehouseController.deleteWarehouseById);


//Routes for supplier invoice
router.post('/supplierinvoice/create', authorization.adminauthenticate ,checkPermission('Branches','Read'),supplierInvoice.createInvoice);// upload.single('image'),
router.get('/supplierinvoice/getall', authorization.adminauthenticate ,checkPermission('Branches','Read'),supplierInvoice.getAllInvoices);
router.get('/supplierinvoice/getbyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), supplierInvoice.getInvoiceById);
router.put('/supplierinvoice/updatebyid/:id', authorization.adminauthenticate ,checkPermission('Branches','Read'),supplierInvoice.updateInvoice);
router.delete('/supplierinvoice/deletebyid/:id',authorization.adminauthenticate ,checkPermission('Branches','Read'), supplierInvoice.softDeleteInvoice);



// Routes for Products
router.post('/products/create', authorization.adminauthenticate ,checkPermission('Products','Create'),productController.createProduct);
router.get('/products/getbyid/:id',authorization.adminauthenticate ,checkPermission('Products','Read'), productController.getProductById);
router.get('/products/getall', authorization.adminauthenticate ,checkPermission('Products','Read'),productController.getAllProducts);
router.put('/products/updatebyid/:id',authorization.adminauthenticate ,checkPermission('Products','Update'), productController.updateProduct);
router.delete('/products/deletebyid/:id',authorization.adminauthenticate ,checkPermission('Products','Delete'), productController.softDeleteProduct);
router.get('/products/expired',authorization.adminauthenticate ,checkPermission('Products','Read'), productController.getExpiredProducts);
router.post('/products/dead-stock/:id',authorization.adminauthenticate ,checkPermission('Products','Update'), productController.addToDeadStock);
router.get('/products/getdead-stock',authorization.adminauthenticate ,checkPermission('Products','Read'), productController.getAllDeadStocks);


module.exports = router;

//40