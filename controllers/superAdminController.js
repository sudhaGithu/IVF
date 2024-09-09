const Admin = require('../models/adminModel');
const logger = require('../middlewares/logger')
const Patient = require('../models/patientModel');
const Branch = require('../models/branchModel');
const Center = require('../models/ivfCentersModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

// Admin operations: create, update, delete
const createAdmin = async (req, res) => {
  try {
    const { fullName, email, password,phoneNumber, role } = req.body;
    console.log(fullName, email, password, phoneNumber);
    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)


    const admin = new Admin({
      fullName,
      email,
      password:hashedpassword,
      phoneNumber,
      role
    });

    await admin.save();


    // Log admin creation
    logger.info('Admin created successfully', { adminId: admin._id });

    res.status(201).json({
        message: "admin created succesfully",
        admin : admin
    });
  } catch (err) {
    logger.error('Error creating admin:', { error: err.message });
    console.error('Error creating admin:', err);
    res.status(500).send('unable to add admin');
  }
};

const loginAdmin = async (req, res) => {
  try{
  const { email, password } = req.body
  const user = await Admin.findOne({ email })
     // Generate JWT token
     const payload = { user: {
      id: user.id,
      email: user.email
      // Add any other fields you want to include in the token
    } };
     const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '12h' });
     if (user && (await bcrypt.compare(password, user.password))) {

    logger.info('Admin logged in successfully', { adminId: user._id });

      res.json({
        message:"login successfully",
          token: token
      })
}
else{

      // Log login attempt with invalid credentials
      logger.warn('Invalid login attempt', { email: email });

  res.json({
    message:"Invalid credentials"
  })
}
}catch(error){
  logger.error('Error logging in admin:', { error: error.message });
  res.status(500).json({ error: 'Unable to login admin',
    message : error.message
   });

}
}

const getDashboardStats = async (req, res) => {
  try {
      const totalPatients = await Patient.countDocuments();
      const activePatients = await Patient.countDocuments({ status: 'active' });
      const totalBranches = await Branch.countDocuments();
      const activeBranches = await Branch.countDocuments({ status: true });
      const totalCenters = await Center.countDocuments();
      const activeCenters = await Center.countDocuments({ status: true });
      const newPatientsThisMonth = await Patient.countDocuments({
          createdAt: {
              $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              $lt: new Date()
          }
      });
 
      res.status(200).json({
          totalPatients,
          activePatients,
          totalBranches,
          activeBranches,
          totalCenters,
          activeCenters,
          newPatientsThisMonth
      });
  } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      res.status(500).send({ error: err.message });
  }
};

module.exports = {
    loginAdmin,
    createAdmin,
    getDashboardStats
}