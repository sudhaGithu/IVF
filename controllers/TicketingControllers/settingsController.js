const Settings = require('../../models/TicketingModels/settingsModel');

exports.updateDefaultEmailRecipient = async (req, res) => {
    const { defaultEmailRecipient } = req.body;
    try {
        let settings = await Settings.findOne();
        if (!settings) {
            settings = new Settings({ defaultEmailRecipient });
        } else {
            settings.defaultEmailRecipient = defaultEmailRecipient;
        }
        await settings.save();
        res.status(200).json({ message: 'Default email recipient updated successfully', settings });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDefaultEmailRecipient = async (req, res) => {
    try {
        const settings = await Settings.findOne();
        res.status(200).json(settings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
