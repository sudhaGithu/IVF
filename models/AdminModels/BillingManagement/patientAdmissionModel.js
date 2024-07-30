const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    patientId: { type: String, required: true },// we should take reference from Patient model
    doctorName: { type: String, required: true }, // we should take reference from Doctor model
    roomName: { type: mongoose.Schema.Types.ObjectId, ref:'Room', required: true },
    bedNumber: { type: mongoose.Schema.Types.ObjectId, ref:'Bed', required: true },
    admissionDate: { type: Date, required: true },
    dischargeDate: { type: Date },
    packageName: { type: mongoose.Schema.Types.ObjectId, ref:'Package', required: true },
    insuranceName: { type: String, required: true },
    policyNo: { type: String, required: true },
    agentName: { type: String, required: true },
    guardianName: { type: String, required: true },
    guardianRelation: { type: String, required: true },
    guardianContact: { type: String, required: true },
    guardianAddress: { type: String, required: true },
    status: { type: String, required: true, enum: ['admitted', 'discharged'] }
});

module.exports = mongoose.model('Admission', admissionSchema);
