const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('TicketRole', roleSchema);