const Department = require('../../models/TicketingModels/departmentModel');

exports.createDepartment = async (req, res) => {
    const { name } = req.body;
    try {
        const department = new Department({ name });
        await department.save();
        res.status(201).json({ message: 'Department created successfully', department });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
