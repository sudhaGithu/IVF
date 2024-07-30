const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  priority: {
    type: Schema.Types.ObjectId,
    ref: 'Priority',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  assignTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // Assuming 'User' is another model for users in your system
    required: true
  },
  ticketType: {
    type: String,
    required: true
  },
  requestDetails: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);
