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

const ticketRoutes = require('./routes/TicketingRoutes');

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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/uploads', express.static('uploads')); 


app.use(express.json());



app.use('/api/tickets', ticketRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/bed', bedRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/inventory', InventoryRoutes);
app.use('/api/pharmacy',PharmacyRoutes);


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
