const Admission = require('../../../models/AdminModels/BillingManagement/patientAdmissionModel');

exports.createAdmission = async (req, res) => {
    const {
        patientId, doctorName, roomName, bedNumber, admissionDate, dischargeDate, packageName, 
        insuranceName, policyNo, agentName, guardianName, guardianRelation, guardianContact, 
        guardianAddress, status
    } = req.body;
    try {
        const newAdmission = new Admission({
            patientId, doctorName, roomName, bedNumber, admissionDate, dischargeDate, packageName, 
            insuranceName, policyNo, agentName, guardianName, guardianRelation, guardianContact, 
            guardianAddress, status
        });

        await newAdmission.save();
        res.status(201).json({ message: 'Admission created successfully', newAdmission });
    } catch (err) {
        console.error('Error creating admission:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getAdmissions = async (req, res) => {
    try {
        const admissions = await Admission.find();
        res.status(200).json({message:"Patient Admissions Retrieved Succesfully",admissions});
    } catch (err) {
        console.error('Error retrieving admissions:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getAdmission = async (req, res) => {
    const { id } = req.params;
    try {
        const admission = await Admission.findById(id);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }
        res.status(200).json(admission);
    } catch (err) {
        console.error('Error retrieving admission:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.updateAdmission = async (req, res) => {
    const { id } = req.params;
    const {
        patientId, doctorName, roomName, bedNumber, admissionDate, dischargeDate, packageName, 
        insuranceName, policyNo, agentName, guardianName, guardianRelation, guardianContact, 
        guardianAddress, status
    } = req.body;
    try {
        const updatedAdmission = await Admission.findByIdAndUpdate(id, {
            patientId, doctorName, roomName, bedNumber, admissionDate, dischargeDate, packageName, 
            insuranceName, policyNo, agentName, guardianName, guardianRelation, guardianContact, 
            guardianAddress, status
        }, { new: true });
        if (!updatedAdmission) {
            return res.status(404).json({ message: 'Admission not found' });
        }
        res.status(200).json(updatedAdmission);
    } catch (err) {
        console.error('Error updating admission:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.deleteAdmission = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAdmission = await Admission.findByIdAndDelete(id);
        if (!deletedAdmission) {
            return res.status(404).json({ message: 'Admission not found' });
        }
        res.status(200).json({ message: 'Admission deleted successfully' });
    } catch (err) {
        console.error('Error deleting admission:', err);
        res.status(400).json({ error: err.message });
    }
};
