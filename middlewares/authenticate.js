// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel'); // Adjust the path as needed
//const superAdmin = require('../models/SuperAdminModle');

const adminauthenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    //console.log("Admin");

    if (!token) return res.status(401).json('No token provided');
    //console.log(token);
    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log(decoded);
        
        const admin = await Admin.findById(decoded.user.id);
        //console.log(admin);
        

        if (!admin) return res.status(404).json('User not found');

        req.user = admin;
        next(); // User authenticated, proceed to the next middleware
    } catch (error) {
        res.status(401).json({ message : error.message});
    }
};



module.exports = {
  adminauthenticate
};
