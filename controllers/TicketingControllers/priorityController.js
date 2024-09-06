const Priority = require('../../models/TicketingModels/ticketPriorityModel');

const createPriority = async (req, res) => {
    const { name } = req.body;
    try {
        const priority = new Priority({ name });
        await priority.save();
        res.status(201).json({ message: 'Priority created successfully', priority });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getPriorities = async (req, res) => {
    try {
        const priorities = await Priority.find();
        res.status(200).json(priorities);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createPriority,
    getPriorities
}
