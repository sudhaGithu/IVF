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
const rolesRoutes = require('./routes/roleRoute')

const authRoutes = require('././routes/TicketingRoutes/authRoutes');
const categoryRoutes = require('././routes/TicketingRoutes/categoryRoutes');
const userRoutes = require('././routes/TicketingRoutes/userRoutes');
const statusRoutes = require('././routes/TicketingRoutes/statusRoutes');
const knowledgeBaseRoutes = require('././routes/TicketingRoutes/knowledgeBaseRoutes');
const settingsRoutes = require('././routes/TicketingRoutes/settingsRoutes');
const priorityRoutes = require('././routes/TicketingRoutes/priorityRoutes');
const departmentRoutes = require('././routes/TicketingRoutes/departmentRoutes');
const customerRoutes = require('././routes/TicketingRoutes/customerRoutes');
const ticketRoutes = require('././routes/TicketingRoutes/ticketRoutes');
const typeRoutes = require('././routes/TicketingRoutes/typeRoutes');
const languageRoutes = require('././routes/TicketingRoutes/languageRoutes');
const organizationRoutes = require('././routes/TicketingRoutes/organizationRoutes');
const contactRoutes = require('././routes/TicketingRoutes/contactRoutes');
const faqRoutes = require('././routes/TicketingRoutes/faqRoutes');
const blogRoutes = require('././routes/TicketingRoutes/blogRoutes');
const PharmacyRoutes = require('./routes/AdminRoutes/PharmacyRoutes');
const billingRoutes = require('./routes/AdminRoutes/billingRoutes');
const InventoryRoutes = require('./routes/AdminRoutes/InventoryRoutes');
const bedRoutes = require('./routes/AdminRoutes/BedmanagerRoutes');
const scheduleRoutes = require('./routes/AdminRoutes/scheduleRoutes');



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
app.use('/api/settings', settingsRoutes);
app.use('/api/priorities', priorityRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/types', typeRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api', scheduleRoutes);
app.use('/api', bedRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api', billingRoutes);
app.use('/api', InventoryRoutes);
app.use('/api',PharmacyRoutes);


// // Routes
app.use('/admin', adminRoutes);
app.use('/state', stateRoutes);
app.use('/country', countryRoutess);
app.use('/superadmin', superAdminRoutes)
app.use('/roles',rolesRoutes )

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
