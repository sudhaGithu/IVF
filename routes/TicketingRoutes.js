// const express = require('express');
// const router = express.Router();

// const authController = require('../controllers/TicketingControllers/authController');
// const blogController = require('../controllers/TicketingControllers/blogController');
// const categoryController = require('../controllers/TicketingControllers/categoryController');
// const contactController = require('../controllers/TicketingControllers/contactController');
// const countryController = require('../controllers/TicketingControllers/countryController');
// const customerController = require('../controllers/TicketingControllers/customerController');
// const departmentController = require('../controllers/TicketingControllers/departmentController');
// const faqController = require('../controllers/TicketingControllers/faqController');
// const knowledgeBaseController = require('../controllers/TicketingControllers/knowledgeBaseController');
// const languageController = require('../controllers/TicketingControllers/languageController');
// const organizationController = require('../controllers/TicketingControllers/organizationController');
// const priorityController = require('../controllers/TicketingControllers/priorityController');
// const roleController = require('../controllers/TicketingControllers/roleController');
// const settingsController = require('../controllers/TicketingControllers/settingsController');
// const statusController = require('../controllers/TicketingControllers/statusController');
// const ticketController = require('../controllers/TicketingControllers/ticketController');
// const typeController = require('../controllers/TicketingControllers/typeController');
// const userController = require('../controllers/TicketingControllers/userController');


// //auth routes
// router.post('/signup', authController.signup);
// router.post('/login', authController.login);
// router.post('/logout', authController.logout);
// //blog routes
// router.post('/blog/Add', blogController.createBlog);
// router.get('/blog/All', blogController.getBlogs);
// router.get('/blog/:id', blogController.getBlog);
// router.put('/blog/:id', blogController.updateBlog);
// router.delete('/blog/:id', blogController.deleteBlog);

// //catefeory and status routes
// router.post('/categeory/Add', categoryController.createCategory);
// router.post('/status/Add', statusController.createStatus);

// //contact routes
// router.post('/contact/Add', contactController.createContact);
// router.get('/contact/All', contactController.getContacts);
// //country routes
// router.post('/country/Add', countryController.createCountry);
// router.get('/country/All', countryController.getCountries);
// //customer routes
// router.post('/customer/Add', customerController.createCustomer);
// router.get('/customer/All', customerController.getCustomers);

// //department routes
// router.post('/department/Add', departmentController.createDepartment);
// router.get('/department/Add', departmentController.getDepartments);
// //faq routes
// router.post('/faq/Add', faqController.createFAQ);
// router.get('/faq/All', faqController.getFAQs);

// //knowlwdgebase routes
// router.post('/knowledgebase/Add', knowledgeBaseController.createKnowledgeBase);
// router.get('/knowledgebase/All', knowledgeBaseController.getKnowledgeBases);
// //language routes
// router.post('/language/Add', languageController.createLanguage);
// router.get('/language/All', languageController.getLanguages);

// //organization routes
// router.post('/organization/Add', organizationController.createOrganization);
// router.get('/organization/All', organizationController.getOrganizations);

// //priority routes
// router.post('/priority/Add', priorityController.createPriority);
// router.get('/priority/All', priorityController.getPriorities);

// //role routes
// router.post('/role/Add', roleController.createRole);
// router.get('/role/All', roleController.getRoles);

// //settings routes
// router.put('/default-email-recipient', settingsController.updateDefaultEmailRecipient);
// router.get('/default-email-recipient', settingsController.getDefaultEmailRecipient);
// //ticket routes
// router.post('/ticket/Add',ticketController.createTicket);
// router.put('/ticket/:id',ticketController.updateTicket);
// router.delete('/ticket/:id',ticketController.deleteTicket);
// router.get('/ticket/All', ticketController.getAllTickets);
// router.get('/ticket/:id',ticketController.getTicket);

// //type routes
// router.post('/type/Add', typeController.createType);
// router.get('/type/All', typeController.getTypes);

// //user routes
// router.post('/user/Add', userController.createUser);
// router.get('/user/All', userController.getUsers);


// module.exports = router;

const express = require('express');
const router = express.Router();

const authController = require('../controllers/TicketingControllers/authController');
const blogController = require('../controllers/TicketingControllers/blogController');
const categoryController = require('../controllers/TicketingControllers/categoryController');
const contactController = require('../controllers/TicketingControllers/contactController');
const customerController = require('../controllers/TicketingControllers/customerController');
const departmentController = require('../controllers/TicketingControllers/departmentController');
const faqController = require('../controllers/TicketingControllers/faqController');
const knowledgeBaseController = require('../controllers/TicketingControllers/knowledgeBaseController');
const languageController = require('../controllers/TicketingControllers/languageController');
const organizationController = require('../controllers/TicketingControllers/organizationController');
const priorityController = require('../controllers/TicketingControllers/priorityController');
const roleController = require('../controllers/TicketingControllers/roleController');
const settingsController = require('../controllers/TicketingControllers/settingsController');
const statusController = require('../controllers/TicketingControllers/statusController');
const ticketController = require('../controllers/TicketingControllers/ticketController');
const typeController = require('../controllers/TicketingControllers/typeController');
const userController = require('../controllers/TicketingControllers/userController');


//auth routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
//blog routes
router.post('/blog/Add', blogController.createBlog);
router.get('/blog/All', blogController.getBlogs);
router.get('/blog/:id', blogController.getBlog);
router.put('/blog/update/:id', blogController.updateBlog);
router.delete('/blog/delete/:id', blogController.deleteBlog);

//catefeory and status routes
router.post('/categeory/Add', categoryController.createCategory);
router.post('/status/Add', statusController.createStatus);

//contact routes
router.post('/contact/Add', contactController.createContact);
router.get('/contact/All', contactController.getContacts);

//customer routes
router.post('/customer/Add', customerController.createCustomer);
router.get('/customer/All', customerController.getCustomers);

//department routes
router.post('/department/Add', departmentController.createDepartment);
router.get('/department/Add', departmentController.getDepartments);
//faq routes
router.post('/faq/Add', faqController.createFAQ);
router.get('/faq/All', faqController.getFAQs);

//knowlwdgebase routes
router.post('/knowledgebase/Add', knowledgeBaseController.createKnowledgeBase);
router.get('/knowledgebase/All', knowledgeBaseController.getKnowledgeBases);
//language routes
router.post('/language/Add', languageController.createLanguage);
router.get('/language/All', languageController.getLanguages);

//organization routes
router.post('/organization/Add', organizationController.createOrganization);
router.get('/organization/All', organizationController.getOrganizations);

//priority routes
router.post('/priority/Add', priorityController.createPriority);
router.get('/priority/All', priorityController.getPriorities);

//role routes
router.post('/role/Add', roleController.createRole);
router.get('/role/All', roleController.getRoles);

//settings routes
router.put('/default-email-recipient/update', settingsController.updateDefaultEmailRecipient);
router.get('/default-email-recipient/get', settingsController.getDefaultEmailRecipient);
//ticket routes
router.post('/createTicket',ticketController.createTicket);
router.put('/updateTicket/:id',ticketController.updateTicket);
router.delete('/deleteTicket/:id',ticketController.deleteTicket);
router.get('/getAllTickets', ticketController.getAllTickets);
router.get('/getTicket/:id',ticketController.getTicket);

//type routes
router.post('/type/Add', typeController.createType);
router.get('/type/All', typeController.getTypes);

//user routes
router.post('/user/Add', userController.createUser);
router.get('/user/All', userController.getUsers);


module.exports = router;