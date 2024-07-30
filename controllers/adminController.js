const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
// Create admin
//app.post('/admin', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'idProof', maxCount: 1 }]), 
const createAdmin = async (req, res) => {
    try {
      const { fullName, phoneNumber, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const admin = new Admin({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
        image: req.files['image'][0].path,
        idProof: req.files['idProof'][0].path
      });
  
      await admin.save();
      res.status(201).send(admin);
    } catch (err) {
      console.error(err);
      res.status(500).send({message : err.message});
    }
  };
  
  // Read all admins
const getallAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({ deleted: false });
        res.send(admins);
      } catch (err) {
        console.error(err);
        res.status(500).send({message : err.message});
      }
  };
  
  // Read admin by ID
const getAdminById =  async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin || admin.deleted) {
          return res.status(404).send('Admin not found');
        }
        res.send(admin);
      } catch (err) {
        console.error(err);
        res.status(500).send({message : err.message});
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
        return res.status(404).send('Admin not found');
      }
  
      res.send(admin);
    } catch (err) {
      console.error(err);
      res.status(500).send({message : err.message});
    }
  };
  
  // Delete admin by ID
const deleteAdminById =  async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, {
          deleted: true
        }, { new: true });
    
        if (!admin) {
          return res.status(404).send('Admin not found');
        }
    
        res.send('Admin soft deleted successfully');
      } catch (err) {
        console.error(err);
        res.status(500).send({message : err.message});
      }
  };

  // Update admin status by ID
const adminStatus =  async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
  
      if (!admin) {
        return res.status(404).send('Admin not found');
      }
  
      // Toggle the status (true to false or false to true)
      admin.status = !admin.status;
  
      await admin.save();
      res.send(admin);
    } catch (err) {
      console.error(err);
      res.status(500).send({message : err.message});
    }
  };


module.exports = {
    createAdmin,
    getAdminById,
    getallAdmins,
    updateAdminById,
    deleteAdminById,
    adminStatus
}