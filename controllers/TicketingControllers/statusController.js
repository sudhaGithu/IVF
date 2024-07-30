const Status = require('../../models/TicketingModels/statusModel');

exports.createStatus = async (req, res) => {
    const { name } = req.body;
    try {
        const status = new Status({ name });
        await status.save();
        res.status(201).json({ message: 'Status created successfully', status });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
