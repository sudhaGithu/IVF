const Invoice = require('../models/supplierInvoice')
const Sequence = require('../models/supplierInvoiceSequence')
const createInvoice = async (req, res) => {
    try {
        // Fetch and increment the sequence value
        let sequence = await Sequence.findOneAndUpdate(
            { name: 'supplierInvoice' },
            { $inc: { value: 1 } },
            { new: true, upsert: true }
        );

        if (!sequence) {
           // logger.error('Failed to generate invoice no');
            return res.status(500).json({ error: 'Failed to generate invoice no' });
        }
        const invno = `INVNO${sequence.value}`;
        const invoice = {...req.body, invoiceNo : invno };
        const newInvoice = await Invoice.create(invoice);
        res.status(201).json(newInvoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findOne({ _id: req.params.id, isDeleted: false });
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({ isDeleted: false });
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findOneAndUpdate(
            { _id: req.params.id, isDeleted: false },
            req.body,
            { new: true, runValidators: true }
        );
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const softDeleteInvoice = async (req, res) => {
    try {
        const result = await Invoice.updateOne(
            { _id: req.params.id, isDeleted: false },
            { isDeleted: true, deletedAt: new Date() }
        );
        if (result.nModified === 0) {
            return res.status(404).json({ message: 'Invoice not found or already deleted' });
        }
        res.status(200).send({message : "invoice deleted successfully"}); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createInvoice,
    getAllInvoices,
    getInvoiceById,
    updateInvoice,
    softDeleteInvoice
}