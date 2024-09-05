const mongoose = require('mongoose');

const ticketTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ticketType', ticketTypeSchema);
