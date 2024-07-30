const AdvancePayment = require('../../../models/AdminModels/BillingManagement/advancepaymentModel');

 const createAdvancePayment = async (req, res) => {
    const { admissionId, patientId, amount, paymentMethod, receiptNo, status } = req.body;
    try {
        const newAdvancePayment = new AdvancePayment({
            admissionId,
            patientId,
            amount,
            paymentMethod,
            receiptNo,
            status
        });

        await newAdvancePayment.save();
        res.status(201).json({ message: 'Advance Payment created successfully', newAdvancePayment });
    } catch (err) {
        console.error('Error creating advance payment:', err);
        res.status(400).json({ error: err.message });
    }
};

const getAdvancePayments = async (req, res) => {
    try {
        const advancePayments = await AdvancePayment.find();
        res.status(200).json({message:"advance payments retrieved succesfully",advancePayments});
    } catch (err) {
        console.error('Error retrieving advance payments:', err);
        res.status(400).json({ error: err.message });
    }
};

const getAdvancePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const advancePayment = await AdvancePayment.findById(id);
        if (!advancePayment) {
            return res.status(404).json({ message: 'Advance Payment not found' });
        }
        res.status(200).json(advancePayment);
    } catch (err) {
        console.error('Error retrieving advance payment:', err);
        res.status(400).json({ error: err.message });
    }
};

const updateAdvancePayment = async (req, res) => {
    const { id } = req.params;
    const { admissionId, patientId, amount, paymentMethod, receiptNo, status } = req.body;
    try {
        const updatedAdvancePayment = await AdvancePayment.findByIdAndUpdate(id, {
            admissionId,
            patientId,
            amount,
            paymentMethod,
            receiptNo,
            status
        }, { new: true });
        if (!updatedAdvancePayment) {
            return res.status(404).json({ message: 'Advance Payment not found' });
        }
        res.status(200).json(updatedAdvancePayment);
    } catch (err) {
        console.error('Error updating advance payment:', err);
        res.status(400).json({ error: err.message });
    }
};

const deleteAdvancePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAdvancePayment = await AdvancePayment.findByIdAndDelete(id);
        if (!deletedAdvancePayment) {
            return res.status(404).json({ message: 'Advance Payment not found' });
        }
        res.status(200).json({ message: 'Advance Payment deleted successfully' });
    } catch (err) {
        console.error('Error deleting advance payment:', err);
        res.status(400).json({ error: err.message });
    }
};

module.exports = {createAdvancePayment, getAdvancePayment, getAdvancePayments, deleteAdvancePayment, updateAdvancePayment};