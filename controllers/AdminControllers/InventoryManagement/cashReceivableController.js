const CashReceivable = require('../../../models/AdminModels/InventoryManagement/CashReceivable');
const Customer = require('../../../models/AdminModels/InventoryManagement/Customer');

exports.createCashReceivable = async (req, res) => {
    try {
        const { customerId, cashReceived, date, paymentType } = req.body;

        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const newCashReceivable = new CashReceivable({
            customer: customer._id,
            cashReceived,
            date,
            paymentType
        });

        await newCashReceivable.save();

        // Populate the customerName and other customer details
        const populatedCashReceivable = await CashReceivable.findById(newCashReceivable._id).populate('customer');

        res.status(201).json(populatedCashReceivable);
    } catch (err) {
        console.error('Error creating cash receivable:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getAllCashReceivables = async (req, res) => {
    try {
        const cashReceivables = await CashReceivable.find();
        res.status(200).json(cashReceivables);
    } catch (err) {
        console.error('Error getting all cash receivables:', err);
        res.status(500).send({error: err.message});
    }
};