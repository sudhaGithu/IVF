const Invoice = require('../../../models/AdminModels/InventoryManagement/Invoice');

exports.createInvoice = async (req, res) => {
    try {
        const {
            customerName, date, itemName, availableQuantity, quantity, unitCode, rate,
            discount, total, paymentType, totalDiscount, grandTotal, paidAmount, totalDue, status
        } = req.body;
        
        const newInvoice = new Invoice({
            customerName, date, itemName, availableQuantity, quantity, unitCode, rate,
            discount, total, paymentType, totalDiscount, grandTotal, paidAmount, totalDue, status
        });
        
        await newInvoice.save();
        res.status(201).json({message:"Invoice Added Succesfully",newInvoice});
    } catch (err) {
        console.error('Error creating invoice:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (err) {
        console.error('Error getting all invoices:', err);
        res.status(500).send({error: err.message});
    }
};

// exports.getInvoice = async (req, res) => {
//     try {
//         const { id } = req.params;
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: 'Invalid ID format' });
//         }
//         const invoice = await Invoice.findById(id);
//         if (!invoice) {
//             return res.status(404).json({ message: 'Invoice not found' });
//         }
//         res.status(200).json(invoice);
//     } catch (err) {
//         console.error('Error getting invoice:', err);
//         res.status(500).send({error: err.message});
//     }
// };

exports.updateInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            customerName, date, itemName, availableQuantity, quantity, unitCode, rate,
            discount, total, paymentType, totalDiscount, grandTotal, paidAmount, totalDue, status
        } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const updatedInvoice = await Invoice.findByIdAndUpdate(
            id, 
            { customerName, date, itemName, availableQuantity, quantity, unitCode, rate,
              discount, total, paymentType, totalDiscount, grandTotal, paidAmount, totalDue, status }, 
            { new: true }
        );

        if (!updatedInvoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        
        res.status(200).json(updatedInvoice);
    } catch (err) {
        console.error('Error updating invoice:', err);
        res.status(500).send({error: err.message});
    }
};

exports.deleteInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const deletedInvoice = await Invoice.findByIdAndDelete(id);
        if (!deletedInvoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (err) {
        console.error('Error deleting invoice:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getPaidInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({ status: 'paid' });
        res.status(200).json({message:"Paid Invoices Retrieved Succesfully",invoices});
    } catch (err) {
        console.error('Error getting paid invoices:', err);
        res.status(500).send({error: err.message});
    }
};

exports.getUnpaidInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({ status: 'unpaid' });
        res.status(200).json({message:"Unpaid Invoices Retrieved Succesfully",invoices});
    } catch (err) {
        console.error('Error getting unpaid invoices:', err);
        res.status(500).send({error: err.message});
    }
};
