const Role = require('../../models/TicketingModels/roleModel');

const createRole = async (req, res) => {
    const { name, slug } = req.body;
    try {
        const role = new Role({ name, slug });
        await role.save();
        res.status(201).json({ message: 'Role created successfully', role });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
module.exports = {createRole, getRoles}