const InsuranceClaim = require('../models/limitApproval');

// Create Insurance Claim
const createInsuranceClaim = async (req, res) => {
  try {
    const insuranceClaim = new InsuranceClaim(req.body);
    await insuranceClaim.save();
    res.status(201).send(insuranceClaim);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Read all Insurance Claims (excluding soft-deleted)
const getAllInsuranceClaims = async (req, res) => {
  try {
    const insuranceClaims = await InsuranceClaim.find({ deleted: false });
    res.send(insuranceClaims);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Read single Insurance Claim by ID
const getInsuranceClaimById = async (req, res) => {
  try {
    const insuranceClaim = await InsuranceClaim.findOne({ _id: req.params.id, deleted: false });
    if (!insuranceClaim) {
      return res.status(404).send({ message: 'Insurance Claim not found' });
    }
    res.send(insuranceClaim);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update Insurance Claim by ID
const updateInsuranceClaimById = async (req, res) => {
  try {
    const insuranceClaim = await InsuranceClaim.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!insuranceClaim) {
      return res.status(404).send({ message: 'Insurance Claim not found' });
    }
    res.send(insuranceClaim);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete Insurance Claim by ID (soft delete)
const deleteInsuranceClaimById = async (req, res) => {
  try {
    const insuranceClaim = await InsuranceClaim.findByIdAndUpdate(
      req.params.id,
      { deleted: true },
      { new: true }
    );
    if (!insuranceClaim) {
      return res.status(404).send({ message: 'Insurance Claim not found' });
    }
    res.send({ message: 'Insurance Claim soft deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Export the router
module.exports = {
    createInsuranceClaim,
    getAllInsuranceClaims,
    getInsuranceClaimById,
    updateInsuranceClaimById,
    deleteInsuranceClaimById

}