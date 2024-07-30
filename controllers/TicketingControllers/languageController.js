const Language = require('../../models/TicketingModels/languageModel');

exports.createLanguage = async (req, res) => {
    const { name, code } = req.body;
    try {
        const language = new Language({ name, code });
        await language.save();
        res.status(201).json({ message: 'Language created successfully', language });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getLanguages = async (req, res) => {
    try {
        const languages = await Language.find();
        res.status(200).json(languages);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
