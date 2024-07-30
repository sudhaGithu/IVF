const KnowledgeBase = require('../../models/TicketingModels/knowledgeBaseModel');

exports.createKnowledgeBase = async (req, res) => {
    const { title, type, details } = req.body;
    try {
        const knowledgeBase = new KnowledgeBase({ title, type, details });
        await knowledgeBase.save();
        res.status(201).json({ message: 'Knowledge Base entry created successfully', knowledgeBase });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getKnowledgeBases = async (req, res) => {
    try {
        const knowledgeBases = await KnowledgeBase.find();
        res.status(200).json(knowledgeBases);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
