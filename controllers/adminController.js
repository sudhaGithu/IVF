const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
// Create admin
//app.post('/admin', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'idProof', maxCount: 1 }]), 
const createAdmin = async (req, res) => {
    try {
      const { fullName, phoneNumber, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const admin = new Admin({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
        image: req.files['image'][0].path,
        idProof: req.files['idProof'][0].path,
        role
      });
  
      await admin.save();
      res.status(201).json(admin);
    } catch (err) {
      console.error(err);
      res.status(500).send({message : err.message});
    }
  };
  
  // Read all admins
const getallAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({ deleted: false }).populate('role');
        res.json(admins);
      } catch (err) {
        console.error(err);
        res.status(500).json({message : err.message});
      }
  };
  
  // Read admin by ID
const getAdminById =  async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id).populate('role');
        if (!admin || admin.deleted) {
          return res.status(404).json('Admin not found');
        }
        res.status(200).json(admin);
      } catch (err) {
        console.error(err);
        res.status(500).json({message : err.message});
      }
  };
  
  // Update admin by ID
const updateAdminById = async (req, res) => {
    try {
      const { fullName, phoneNumber, email} = req.body;
      console.log(req.body);
      const admin = await Admin.findByIdAndUpdate(req.params.id, {
        fullName,
        phoneNumber,
        email
      } , { new: true });
  
      if (!admin) {
        return res.status(404).json('Admin not found');
      }
  
      res.status(200).json(admin);
    } catch (err) {
      console.error(err);
      res.status(500).json({message : err.message});
    }
  };
  
  // Delete admin by ID
const deleteAdminById =  async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, {
          deleted: true
        }, { new: true });
    
        if (!admin) {
          return res.status(404).json('Admin not found');
        }
    
        res.status(200).json('Admin soft deleted successfully');
      } catch (err) {
        console.error(err);
        res.status(500).json({message : err.message});
      }
  };

  // Update admin status by ID
const adminStatus =  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
  
      if (!admin) {
        return res.status(404).json('Admin not found');
      }
  
      // Toggle the status (true to false or false to true)
      admin.status = !admin.status;
  
      await admin.save();
      res.status(200).json(admin);
    } catch (err) {
      console.error(err);
      res.status(500).send({message : err.message});
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
  
      //logger.info('Admin logged in successfully', { adminId: user._id });
  
        res.json({
          message:"login successfully",
            token: token
        })
  }
  else{
  
        // Log login attempt with invalid credentials
        //logger.warn('Invalid login attempt', { email: email });
  
    res.json({
      message:"Invalid credentials"
    })
  }
  }catch(error){
    //logger.error('Error logging in admin:', { error: error.message });
    res.status(500).json({ error: 'Unable to login admin',
      message : error.message
     });
  
  }
  }

module.exports = {
    createAdmin,
    getAdminById,
    getallAdmins,
    updateAdminById,
    deleteAdminById,
    adminStatus,
    loginAdmin
}