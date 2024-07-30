const express = require('express');
const ticketController = require('../../controllers/TicketingControllers/ticketController');

const router = express.Router();

// Route to create a new ticket
router.post('/',ticketController.createTicket);

// Route to update a ticket
router.put('/:id',ticketController.updateTicket);

// Route to delete a ticket
router.delete('/:id',ticketController.deleteTicket);

// Route to get all tickets
router.get('/', ticketController.getAllTickets);

// Route to get a specific ticket by ID
router.get('/:id',ticketController.getTicket);

module.exports = router;
