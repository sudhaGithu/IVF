const Billing = require('../../../models/AdminModels/BillingManagement/billingModel');

exports.createBilling = async (req, res) => {
    const {
        patientId, billDate, patientName, dateOfBirth, address, sex, admissionDate,
        dischargeDate, packageName, insuranceName, totalDays, policyNo, serviceName,
        quantity, rate, subTotal, advancePayment, paymentMethod, cashCardNo, receiptNo,
        bedPayment, total, notes, status
    } = req.body;

    try {
        const newBilling = new Billing({
            patientId, billDate, patientName, dateOfBirth, address, sex, admissionDate,
            dischargeDate, packageName, insuranceName, totalDays, policyNo, serviceName,
            quantity, rate, subTotal, advancePayment, paymentMethod, cashCardNo, receiptNo,
            bedPayment, total, notes, status
        });

        await newBilling.save();
        res.status(201).json({ message: 'Billing created successfully', newBilling });
    } catch (err) {
        console.error('Error creating billing:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getBilling = async (req, res) => {
    const { id } = req.params;
    try {
        const billing = await Billing.findById(id).populate('patientId');
        if (!billing) {
            return res.status(404).json({ message: 'Billing not found' });
        }
        res.status(200).json(billing);
    } catch (err) {
        console.error('Error retrieving billing:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getAllBillings = async (req, res) => {
    try {
        const billings = await Billing.find();
        res.status(200).json({message:" All Bills Retrieved Succesfully",billings});
    } catch (err) {
        console.error('Error retrieving billings:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.updateBilling = async (req, res) => {
    const { id } = req.params;
    const {
        patientId, billDate, patientName, dateOfBirth, address, sex, admissionDate,
        dischargeDate, packageName, insuranceName, totalDays, policyNo, serviceName,
        quantity, rate, subTotal, advancePayment, paymentMethod, cashCardNo, receiptNo,
        bedPayment, total, notes, status
    } = req.body;

    try {
        const updatedBilling = await Billing.findByIdAndUpdate(id, {
            patientId, billDate, patientName, dateOfBirth, address, sex, admissionDate,
            dischargeDate, packageName, insuranceName, totalDays, policyNo, serviceName,
            quantity, rate, subTotal, advancePayment, paymentMethod, cashCardNo, receiptNo,
            bedPayment, total, notes, status
        }, { new: true });

        if (!updatedBilling) {
            return res.status(404).json({ message: 'Billing not found' });
        }
        res.status(200).json(updatedBilling);
    } catch (err) {
        console.error('Error updating billing:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.deleteBilling = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBilling = await Billing.findByIdAndDelete(id);
        if (!deletedBilling) {
            return res.status(404).json({ message: 'Billing not found' });
        }
        res.status(200).json({ message: 'Billing deleted successfully' });
    } catch (err) {
        console.error('Error deleting billing:', err);
        res.status(400).json({ error: err.message });
    }
};
