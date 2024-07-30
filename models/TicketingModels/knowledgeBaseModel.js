const mongoose = require('mongoose');

const knowledgeBaseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    details: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('KnowledgeBase', knowledgeBaseSchema);
