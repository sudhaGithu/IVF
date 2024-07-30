// app/controllers/bedAssignmentController.js
const BedAssignment = require('../../../models/AdminModels/BedManager/bedAssignmentModel');

const createBedAssignment = async (req, res) => {
  try {
    const newBedAssignment = new BedAssignment(req.body);
    const savedBedAssignment = await newBedAssignment.save();
    res.status(201).json({message:"Bed Assigned Succesfully",savedBedAssignment});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBedAssignments = async (req, res) => {
  try {
    const bedAssignments = await BedAssignment.find({ isDeleted: false });
    res.send(bedAssignments);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getBedAssignmentById = async (req, res) => {
  try {
    const bedAssignment = await BedAssignment.findById(req.params.id);
    if (!bedAssignment) {
      return res.status(404).json({ message: 'Bed Assignment not found' });
    }
    res.status(200).json(bedAssignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBedAssignment = async (req, res) => {
  try {
    const updatedBedAssignment = await BedAssignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBedAssignment) {
      return res.status(404).json({ message: 'Bed Assignment not found' });
    }
    res.status(200).json(updatedBedAssignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBedAssignment = async (req, res) => {
  try {
    const bedAssignment = await BedAssignment.findByIdAndUpdate(req.params.id, { isDeleted: true, deletedAt: new Date() });
    if (!bedAssignment) return res.status(404).send('Bed Assignment not found');
    res.send('Bed Assignment deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {createBedAssignment, getBedAssignments, getBedAssignmentById, deleteBedAssignment, updateBedAssignment};