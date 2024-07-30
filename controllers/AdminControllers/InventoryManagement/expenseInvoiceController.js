const ExpenseInvoice = require('../../../models/AdminModels/InventoryManagement/ExpenseInvoice');

exports.createExpenseInvoice = async (req, res) => {
    try {
        const { expenseType, date, itemName, quantity, rate, total, grandTotal, paidAmount, remainingDue, status } = req.body;
        const newInvoice = new ExpenseInvoice({ expenseType, date, itemName, quantity, rate, total, grandTotal, paidAmount, remainingDue, status });
        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (err) {
        console.error('Error creating expense invoice:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getAllExpenseInvoices = async (req, res) => {
    try {
        const invoices = await ExpenseInvoice.find();
        res.status(200).json(invoices);
    } catch (err) {
        console.error('Error getting all expense invoices:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getExpenseInvoice = async (req, res) => {
    try {
        const invoice = await ExpenseInvoice.findById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (err) {
        console.error('Error getting expense invoice:', err);
        res.status(500).send({error: err.message});
    }
};

exports.updateExpenseInvoice = async (req, res) => {
    try {
        const { expenseType, date, itemName, quantity, rate, total, grandTotal, paidAmount, remainingDue, status } = req.body;
        const invoice = await ExpenseInvoice.findByIdAndUpdate(
            req.params.id,
            { expenseType, date, itemName, quantity, rate, total, grandTotal, paidAmount, remainingDue, status },
            { new: true }
        );
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (err) {
        console.error('Error updating expense invoice:', err);
        res.status(500).send({error: err.message});
    }
};

exports.deleteExpenseInvoice = async (req, res) => {
    try {
        const invoice = await ExpenseInvoice.findByIdAndDelete(req.params.id);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (err) {
        console.error('Error deleting expense invoice:', err);
        res.status(500).send({error: err.message});
    }
};

// Get paid expenses
exports.getPaidExpenses = async (req, res) => {
    try {
        const invoices = await ExpenseInvoice.find({ status: 'Paid' });
        res.status(200).json(invoices);
    } catch (err) {
        console.error('Error getting paid expenses:', err);
        res.status(500).send({error: err.message});
    }
};

// Get unpaid expenses
exports.getUnpaidExpenses = async (req, res) => {
    try {
        const invoices = await ExpenseInvoice.find({ status: 'Unpaid' });
        res.status(200).json({message: "Retrieved Unpaid Expenses Succesfully",invoices});
    } catch (err) {
        console.error('Error getting unpaid expenses:', err);
        res.status(500).send({error: err.message});
    }
};
