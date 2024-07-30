const Employee = require('../models/employeeModel');
const Sequence = require('../models/empSequenceModel')

// Create an Employee
const createEmployee = async (req, res) => {
  try {
       // Fetch and increment the sequence value
       let sequence = await Sequence.findOneAndUpdate(
        { name: 'employee' },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );

    if (!sequence) {
       
        return res.status(500).json({ error: 'Failed to generate employee id' });
    }
    const EMPID = `EMP${sequence.value}`;
    const newEmployeeData = {
      ...req.body,
      employee_id: EMPID
    };
    const employee = await Employee.create(newEmployeeData);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve an Employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById({ _id: req.params.id, deleted: false })
      .populate('department')
      .populate('role')
      .populate('center')
      .populate('branch')
      .exec();

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an Employee by ID
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('department')
      .populate('role')
      .populate('center')
      .populate('branch')
      .exec();

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({
      message : "employee updated successfully",
      data : employee});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an Employee by ID
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id,
      { deleted: true },
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find({ deleted: false })
        .populate('department')
        .populate('role')
        .populate('center')
        .populate('branch')
        .exec();

        if(employees.length === 0 )
        {
          return res.status(200).json({message : "no employees found"})
        }
  
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //status change
const EmployeeStatus = async (req, res) => {
    const { id } = req.params;
  
    try {
      const employee = await Employee.findById(id);
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      // Toggle status
      employee.status = !employee.status;
      await employee.save();
  
      res.json({ message: 'Employee status updated successfully', employee });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = {
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    EmployeeStatus
}