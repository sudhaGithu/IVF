const mongoose = require('mongoose');

const ticketPrioritySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ticketPriority', ticketPrioritySchema);
