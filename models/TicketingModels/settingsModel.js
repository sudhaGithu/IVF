const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    defaultEmailRecipient: { type: String, required: true }
});

module.exports = mongoose.model('Settings', settingsSchema);
