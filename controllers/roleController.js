const Role = require('../models/rolesModel');
const Department = require('../models/DepartmentsModel'); // Adjust path as needed

// Create a new role
// Create a new role
const createRole = async (req, res) => {
    try {
      const { roleName, department } = req.body;
  
      // Check if department exists
      const existingDepartment = await Department.findById(department);
      if (!existingDepartment) {
        return res.status(400).json({
          status: 'error',
          message: 'Department does not exist'
        });
      }
  
      const newRole = new Role({ roleName, department });
      await newRole.save();
  
      res.status(201).json({
        status: 'success',
        message: 'Role created successfully',
        data: newRole
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  };
  
  // Get all roles
  const getAllRoles = async (req, res) => {
    try {
      const roles = await Role.find({ deleted: false }).populate('department');
      res.status(200).json({
        status: 'success',
        data: roles
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };
  
  // Get a role by ID
  const getRoleById = async (req, res) => {
    try {
      const role = await Role.findById(req.params.id).populate('department');
      if (!role || role.deleted) {
        return res.status(404).json({
          status: 'error',
          message: 'Role not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: role
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };
  
  // Update a role by ID
  const updateRole = async (req, res) => {
    try {
      const { roleName, department } = req.body;
      const updatedRole = await Role.findByIdAndUpdate(
        req.params.id,
        { roleName, department },
        { new: true }
      ).populate('department');
      if (!updatedRole) {
        return res.status(404).json({
          status: 'error',
          message: 'Role not found'
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Role updated successfully',
        data: updatedRole
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };
  
  

const roleStatus = async (req, res) => {
    try {
      const role = await Role.findById(req.params.id);
  
      if (!role) {
        return res.status(404).json({
          status: 'error',
          message: 'Role not found'
        });
      }
  
      // Toggle the status
      role.status = !role.status; // Flip the boolean value
  
      // Save the updated role
      await role.save();
  
      res.status(200).json({
        status: 'success',
        message: 'Role status toggled successfully',
        data: role
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };

  // Soft delete role by ID
const deleterole =  async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, {
      deleted: true
    }, { new: true });

    if (!role) {
      return res.status(404).send('Role not found');
    }

    res.status(200).send({ message : 'Roledeleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send( {error : err.message });
  }
};


module.exports = {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  roleStatus,
  deleterole
};