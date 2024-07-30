
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseTypeSchema = new Schema({
    expenseType: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ExpenseType', ExpenseTypeSchema);
