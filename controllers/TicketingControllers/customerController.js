const Customer = require('../../models/TicketingModels/customerModel');

exports.createCustomer = async (req, res) => {
    const { firstName, lastName, email, phone, city, address, country, password } = req.body;
    try {
        const customer = new Customer({ firstName, lastName, email, phone, city, address, country, password });
        await customer.save();
        res.status(201).json({ message: 'Customer created successfully', customer });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
