const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
//const port = process.env.PORT


//sudha controllers
const countryRoutess = require('./routes/countryRoutes')
const adminRoutes = require('./routes/adminRoutes')
// const participantRoutes = require('./routes/participantRoutes');
const stateRoutes = require('./routes/stateRoutes');
const superAdminRoutes = require('./routes/superAdminRoutes')

const authRoutes = require('././routes/TicketingRoutes/authRoutes');
const categoryRoutes = require('././routes/TicketingRoutes/categoryRoutes');
const userRoutes = require('././routes/TicketingRoutes/userRoutes');
const statusRoutes = require('././routes/TicketingRoutes/statusRoutes');
const knowledgeBaseRoutes = require('././routes/TicketingRoutes/knowledgeBaseRoutes');
const roleRoutes = require('././routes/AdminRoutes/roleRoute');
const settingsRoutes = require('././routes/TicketingRoutes/settingsRoutes');
const priorityRoutes = require('././routes/TicketingRoutes/priorityRoutes');
const departmentRoutes = require('././routes/TicketingRoutes/departmentRoutes');
const customerRoutes = require('././routes/TicketingRoutes/customerRoutes');
const ticketRoutes = require('././routes/TicketingRoutes/ticketRoutes');
const typeRoutes = require('././routes/TicketingRoutes/typeRoutes');
const languageRoutes = require('././routes/TicketingRoutes/languageRoutes');
const timeSlotRoutes = require('./././routes/AdminRoutes/Schedule/timeSlotRoutes');
const scheduleRoutes = require('./././routes/AdminRoutes/Schedule/scheduleRoutes');
const roomRoutes = require('./././routes/AdminRoutes/BedManager/roomRoutes');
const bedRoutes = require('./././routes/AdminRoutes/BedManager/bedRoutes');
const bedAssignmentRoutes = require('./routes/AdminRoutes/BedManager/bedAssignmentRoute');
const organizationRoutes = require('././routes/TicketingRoutes/organizationRoutes');
const countryRoutes = require('././routes/TicketingRoutes/countryRoutes');
const contactRoutes = require('././routes/TicketingRoutes/contactRoutes');
const faqRoutes = require('././routes/TicketingRoutes/faqRoutes'); 
const blogRoutes = require('././routes/TicketingRoutes/blogRoutes');
const medicineCategoryRoutes = require('./././routes/AdminRoutes/pharmacyManagement/medicineCategoryRoutes'); 
const medicineRoutes = require('./././routes/AdminRoutes/pharmacyManagement/medicineRoutes');
const serviceRoutes = require('./././routes/AdminRoutes/BillingManagement/serviceRoutes');
const packageRoutes = require('./././routes/AdminRoutes/BillingManagement/packageRoutes'); 
const admissionRoutes = require('./././routes/AdminRoutes/BillingManagement/patientAdmissionRoutes');
const advancePaymentRoutes = require('./././routes/AdminRoutes/BillingManagement/advancePaymentRoutes');
const billingRoutes = require('./././routes/AdminRoutes/BillingManagement/billingRoutes');
const expenseTypeRoutes = require('./././routes/AdminRoutes/InventoryManagement/expenseTypeRoutes');
const expenseInvoiceRoutes = require('./././routes/AdminRoutes/InventoryManagement/expenseInvoiceRoutes');
const customersRoutes = require('./././routes/AdminRoutes/InventoryManagement/customersRoutes');
const invoiceRoutes = require('./././routes/AdminRoutes/InventoryManagement/invoiceRoutes');
const cashReceivableRoutes = require('./././routes/AdminRoutes/InventoryManagement/cashReceivableRoutes');



// Enable All CORS Requests
app.use(cors());

app.use(cors({
    origin: '*' // Allow only requests from this origin
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/uploads', express.static('uploads')); 


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/statuses', statusRoutes);
app.use('/api/knowledge-bases', knowledgeBaseRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/priorities', priorityRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/types', typeRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/timeslots', timeSlotRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/beds', bedRoutes);
app.use('/api/bedAssign', bedAssignmentRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use('/api/faqs', faqRoutes); 
app.use('/api/blogs', blogRoutes);
app.use('/api/medicine-categories', medicineCategoryRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/services', serviceRoutes); 
app.use('/api/packages', packageRoutes); 
app.use('/api/patientadmissions', admissionRoutes);
app.use('/api/advancePayments', advancePaymentRoutes);
app.use('/api/billings', billingRoutes);
app.use('/api/expensetype', expenseTypeRoutes);
app.use('/api/expenseinvoice', expenseInvoiceRoutes);
app.use('/api/customersinventory', customersRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/cashReceivables', cashReceivableRoutes);


// // Routes
app.use('/admin', adminRoutes);
app.use('/state', stateRoutes);
app.use('/country', countryRoutess);
app.use('/superadmin', superAdminRoutes)

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });


    const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});
