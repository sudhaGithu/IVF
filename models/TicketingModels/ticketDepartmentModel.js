const mongoose = require('mongoose');

const ticketDepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ticketDepartment', ticketDepartmentSchema);
