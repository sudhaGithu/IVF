const express = require('express');
const router = express.Router();

const branchController = require('../controllers/branchController')


const countryController = require('../controllers/countryController')
const stateController = require('../controllers/stateController')
const patientController = require('../controllers/patientController')
const departmentController = require('../controllers/departmentController')
const rolesController = require('../controllers/roleController')
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
const { upload } = require('../middlewares/fileupload')



// to add country
router.post('/addcountry', countryController.createCountry)
router.delete('/deletecountry/:id', countryController.deleteCountry)


//to add state
router.post('/addstate/:id', stateController.createState)
router.delete('/deletestate/:id', stateController.deleteStateById)
router.get('/getstatebyid/:id', stateController.getStateById)


// branch routes
// Routes for Branch CRUD operations
router.get('/allbranches', branchController.getAllBranches);
router.get('/branchbyid/:id', branchController.getBranchById);
router.post('/addbranch', branchController.createBranch);
router.put('/updatebranch/:id', branchController.updateBranch);
router.delete('/deletebranch/:id', branchController.deleteBranch);
router.post('/branchstatus/:id', branchController.updateBranchStatus);


//patient routes
// Routes
router.post('/addpatient', patientController.createPatient);
router.get('/getallpatients', patientController.getAllPatients);
router.get('/getpatientbyid/:id', patientController.getPatientbyId);
router.put('/updatepatient/:id', patientController.updatePatient);
router.delete('/deletepatient/:id', patientController.deletePatientById);

// department routes
// Define routes
router.post('/departments/createdepartment', departmentController.createDepartment);
router.get('/departments/alldepartments', departmentController.getAllDepartments);
router.get('/departments/getbyid/:id', departmentController.getDepartmentById);
router.put('/departments/update/:id', departmentController.updateDepartment);
router.put('/departments/status/:id',departmentController.DepartmentStatus);
router.delete('/departments/delete/:id', departmentController.deleteDepartment)


//role routes
// Define routes
router.post('/roles/createrole', rolesController.createRole);
router.get('/roles/getallroles', rolesController.getAllRoles);
router.get('/roles/getrolebyid/:id', rolesController.getRoleById);
router.put('/roles/updaterole/:id', rolesController.updateRole);
router.put('/roles/status/:id', rolesController.roleStatus)
router.delete('/roles/deleterole/:id', rolesController.deleterole)

// Routes for Employee CRUD operations
router.post('/employees/create', employeeController.createEmployee);
router.get('/employees/getbyid/:id', employeeController.getEmployeeById);
router.put('/employees/updatebyid/:id', employeeController.updateEmployee);
router.delete('/employees/delete/:id', employeeController.deleteEmployee);
router.get('/employees/getall', employeeController.getAllEmployees)
router.put('/employees/status/:id' , employeeController.EmployeeStatus)


// Routes for treatment model
router.post('/treatment/createtreatment', upload.single('image'),treatmentController.createTreatment)
router.get('/treatment/getall', treatmentController.getallTreatments)
router.get('/treatmentbyid/:id', treatmentController.getTreatmentById)
router.put('/updatetreatment/:id', treatmentController.updateTreatment)
router.put('/treatment/status/:id', treatmentController.treatmentStatus)
router.delete('/treatment/deletetreatment/:id', treatmentController.deleteTreatment)


//Routes for insurance model
router.post('/insurance/createinsurance', insuranceController.createInsurance)
router.get('/insurance/getallinsurances', insuranceController.getAllInsurances)
router.get('/insurance/getbyid/:id', insuranceController.getInsuranceById)
router.delete('/insurance/deletebyid/:id', insuranceController.deleteInsuranceById)
router.put('/insurance/updatebyid/:id', insuranceController.updateInsuranceById)


// Routes for limitApproval
router.post('/limitapproval/create', limitApprovalController.createInsuranceClaim);
router.get('/limitapproval/getall', limitApprovalController.getAllInsuranceClaims);
router.get('/limitapproval/getbyid/:id', limitApprovalController.getInsuranceClaimById);
router.put('/limitapproval/update/:id', limitApprovalController.updateInsuranceClaimById);
router.delete('/limitapproval/delete/:id', limitApprovalController.deleteInsuranceClaimById);


// Routes for bookings
router.post('/bookings/create', bookingController.createOrder);
router.get('/bookings/getall', bookingController.getOrders);
router.get('/bookings/getbyid/:id', bookingController.getOrder);
router.put('/bookings/updatebyid/:id', bookingController.updateOrder);
router.delete('/bookings/delete/:id', bookingController.deleteOrder);






//inventory management
//Routes for suppliers
router.post('/suppliers/create', supplierController.createSupplier);
router.get('/suppliers/getall', supplierController.getAllSuppliers);
router.get('/suppliers/getbyid/:id', supplierController.getSupplierById);
router.put('/suppliers/updatebyid/:id', supplierController.updateSupplierById);
router.delete('/suppliers/deletebyid/:id', supplierController.deleteSupplierById);


//Routes for categories
router.post('/categories/create', categoryController.createCategory);
router.get('/categories/getall', categoryController.getAllCategories);
router.get('/categories/getbyid/:id', categoryController.getCategoryById);
router.put('/categories/updatebyid/:id', categoryController.updateCategoryById);
router.delete('/categories/deletebyid/:id', categoryController.deleteCategoryById);


// Routes  for WareHouse
router.post('/warehouses/create', warehouseController.createWarehouse);
router.get('/warehouses/getall', warehouseController.getAllWarehouses);
router.get('/warehouses/getbyid/:id', warehouseController.getWarehouseById);
router.put('/warehouses/updatebyid/:id', warehouseController.updateWarehouseById);
router.delete('/warehouses/deletebyid/:id', warehouseController.deleteWarehouseById);


//Routes for supplier invoice
router.post('/supplierinvoice/create', supplierInvoice.createInvoice);// upload.single('image'),
router.get('/supplierinvoice/getall', supplierInvoice.getAllInvoices);
router.get('/supplierinvoice/getbyid/:id', supplierInvoice.getInvoiceById);
router.put('/supplierinvoice/updatebyid/:id', supplierInvoice.updateInvoice);
router.delete('/supplierinvoice/deletebyid/:id', supplierInvoice.softDeleteInvoice);



// Routes for Products
router.post('/products/create', productController.createProduct);
router.get('/products/getbyid/:id', productController.getProductById);
router.get('/products/getall', productController.getAllProducts);
router.put('/products/updatebyid/:id', productController.updateProduct);
router.delete('/products/deletebyid/:id', productController.softDeleteProduct);
router.get('/products/expired', productController.getExpiredProducts);
router.post('/products/dead-stock/:id', productController.addToDeadStock);
router.get('/products/getdead-stock', productController.getAllDeadStocks);


module.exports = router;

//40