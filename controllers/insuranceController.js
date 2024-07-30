const Insurance = require('../models/insuranceModel')

const createInsurance = async (req, res) => {
    try {
      const insurance = new Insurance(req.body);
      await insurance.save();
      res.status(201).send(insurance);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  
  // Read all insurances
const getAllInsurances = async (req, res) => {
    try {
      const insurances = await Insurance.find({ deleted: false });
      res.send(insurances);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  // Read single insurance by id
const getInsuranceById = async (req, res) => {
    try {
      const insurance = await Insurance.findById({ _id: req.params.id, deleted: false });
      if (!insurance) {
        return res.status(404).send({ message: 'Insurance not found' });
      }
      res.send(insurance);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  // Update
const updateInsuranceById = async (req, res) => {
    try {
      const insurance = await Insurance.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!insurance) {
        return res.status(404).send({ message: 'Insurance not found' });
      }
      res.send(insurance);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  
  // Delete
const deleteInsuranceById = async (req, res) => {
    try {
        const insurance = await Insurance.findByIdAndUpdate(
          req.params.id,
          { deleted: true },
          { new: true }
        );
        if (!insurance) {
          return res.status(404).send({ message: 'Insurance not found' });
        }
        res.send({ message: 'Insurance soft deleted successfully' });
      } catch (err) {
        res.status(500).send(err);
      }
  };

  module.exports = {
    createInsurance,
    getAllInsurances,
    getInsuranceById,
    updateInsuranceById,
    deleteInsuranceById
  }