const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');
const Sequence = require('../models/mrnSequenceModel')

// Create a user
const createPatient = async (req, res) => {
  try {

                // Fetch and increment the sequence value
                let sequence = await Sequence.findOneAndUpdate(
                  { name: 'patient' },
                  { $inc: { value: 1 } },
                  { new: true, upsert: true }
              );
  
              if (!sequence) {
                  logger.error('Failed to generate MRN NO: Sequence document not found or update failed');
                  return res.status(500).json({ error: 'Failed to generate baby code' });
              }
              const MRNNO = `MRNNO${sequence.value}`;
                  // Create a new patient object combining req.body and MRNNO
    const newPatientData = {
      ...req.body,
      MRNNO: MRNNO
    };
    const newPatient = await Patient.create(newPatientData);
    res.status(201).json({
      status: 'success',
      message: 'Patient created successfully',
      data: newPatient
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// Get all users
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ deleted: false });
    if(patients.length === 0 )
    {
      res.status(200).send({ message : "patients not found"})
    }
    res.status(200).send(patients);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message : err.message });
  }
};

// Get user by ID
const getPatientbyId = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient || patient.deleted) {
      return res.status(404).send('Patient not found');
    }
    res.send(patient);
  } catch (err) {
    console.error(err);
    res.status(500).send({message : err.message});
  }
};

// Update user by ID
const updatePatient = async (req, res) => {
  try {
    const updatedPatient= await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({
        status: 'error',
        message: 'Patient not found'
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'patient updated successfully',
      data: updatedPatient
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// Delete user by ID
const deletePatientById = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, {
      deleted: true
    }, { new: true });

    if (!patient) {
      return res.status(404).send('Patient not found');
    }

    res.send('Patient deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send({ message : err.message });
  }
};

module.exports = {
    createPatient,
    getAllPatients,
    getPatientbyId,
    updatePatient,
    deletePatientById
};
