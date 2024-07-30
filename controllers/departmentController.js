const Department = require('../models/DepartmentsModel')

// departments.controller.js


// Create a new department
const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const newDepartment = new Department({ name });
    await newDepartment.save();
    res.status(201).json({
      status: 'success',
      message: 'Department created successfully',
      data: newDepartment
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// Get a department by ID
const getDepartmentById = async (req, res) => {
    try {
      const department = await Department.findById({ _id: req.params.id, deleted: false });
      if (!department) {
        return res.status(404).json({
          status: 'error',
          message: 'Department not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: department
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };

  // Update a department by ID
const updateDepartment = async (req, res) => {
    try {
      const { name } = req.body;
      const department = await Department.findByIdAndUpdate(
        req.params.id,
        { name },
        { new: true }
      );
      if (!department) {
        return res.status(404).json({
          status: 'error',
          message: 'Department not found'
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Department updated successfully',
        data: department
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };

  // Get all departments
const getAllDepartments = async (req, res) => {
    try {
      const departments = await Department.find({ deleted: false });
      if(departments.length === 0 )
      {
        return res.status(200).json({ message : "no departments"})
      }
      res.status(200).json({
        status: 'success',
        data: departments
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };

  // Toggle department status by ID
const DepartmentStatus = async (req, res) => {
    try {
      const department = await Department.findById(req.params.id);
  
      if (!department) {
        return res.status(404).json({
          status: 'error',
          message: 'Department not found'
        });
      }
  
      // Toggle the status
      department.status = !department.status; // Flip the boolean value
  
      // Save the updated department
      await department.save();
  
      res.status(200).json({
        status: 'success',
        message: 'Department status toggled successfully',
        data: department
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };

  const deleteDepartment = async (req, res) => {
    try {
      const department = await Department.findByIdAndUpdate(req.params.id,
        { deleted: true },
        { new: true }
      );
  
      if (!department) {
        return res.status(404).json({ error: 'department not found' });
      }
  
      res.json({ message: 'department deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  module.exports = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartment,
    DepartmentStatus,
    deleteDepartment
  }