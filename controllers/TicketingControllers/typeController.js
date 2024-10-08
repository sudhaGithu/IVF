const Type = require('../../models/TicketingModels/ticketTypeModel');

const createType = async (req, res) => {
    const { name } = req.body;
    try {
        const type = new Type({ name });
        await type.save();
        res.status(201).json({ message: 'Type created successfully', type });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getTypes = async (req, res) => {
    try {
        const types = await Type.find();
        res.status(200).json(types);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createType,
    getTypes
}
