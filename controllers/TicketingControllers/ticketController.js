const Ticket = require('../../models/TicketingModels/ticket');

// Admin operations: create, update, delete
const createTicket = async (req, res) => {
  try {
    const { customername, category, priority, subject, department, assignTo, ticketType, requestDetails } = req.body

    const newTicket = new Ticket({
        customername,
        department,
        category,
        priority,
        subject,
        assignTo,
        ticketType,
        requestDetails
    });
    await newTicket.save();
    res.status(201).json({message:'Ticket created succesfully',newTicket});
  } catch (err) {
    console.error('Error creating ticket:', err);
    res.status(500).send('Server Error');
  }
};

const updateTicket = async (req, res) => {
  try {
    const { customername, category, priority, subject, department, assignTo, ticketType, requestDetails } = req.body;
    const ticketId = req.params.id;
    const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, {
        customername,
        department,
        category,
        priority,
        subject,
        assignTo,
        ticketType,
        requestDetails
    }, { new: true });
    if (!updatedTicket) {
      return res.status(404).send('Ticket not found');
    }

    res.json(updatedTicket);
  } catch (err) {
    console.error('Error updating ticket:', err);
    res.status(500).send('Server Error');
  }
};

const getAllTickets = async (req, res) => {
  try {
      // Read all currency
      const ticket = await Ticket.find();

      res.status(200).json({
          status: 200,
          message: 'currency retrieved successfully',
          data: ticket
      });
  } catch (error) {
      res.status(500).json({
          status: 500,
          message: 'Failed to retrieve currency',
          error: error.message
      });
  }
};


const getTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error('Error retrieving ticket:', error);
    res.status(500).json({ message: 'Failed to retrieve ticket', error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const deletedTicket = await Ticket.findByIdAndDelete(ticketId);

    if (!deletedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    console.error('Error deleting ticket:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = {createTicket,updateTicket,deleteTicket, getAllTickets, getTicket}
