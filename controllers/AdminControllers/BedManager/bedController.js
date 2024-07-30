// app/controllers/bedController.js
const Bed = require('../../../models/AdminModels/BedManager/bedModel');

exports.createBed = async (req, res) => {
  try {
    const newBed = new Bed(req.body);
    const savedBed = await newBed.save();
    res.status(201).json({message: "Bed Added Succesfully",savedBed});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBeds = async (req, res) => {
  try {
    const beds = await Bed.find({ isDeleted: false });
    res.send(beds);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBedById = async (req, res) => {
  try {
    const bed = await Bed.findById(req.params.id);
    if (!bed) {
      return res.status(404).json({ message: 'Bed not found' });
    }
    res.status(200).json(bed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBed = async (req, res) => {
  try {
    const updatedBed = await Bed.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBed) {
      return res.status(404).json({ message: 'Bed not found' });
    }
    res.status(200).json(updatedBed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBed = async (req, res) => {
  try {
    const bed = await Bed.findByIdAndUpdate(req.params.id, { isDeleted: true, deletedAt: new Date() });
    if (!bed) return res.status(404).send('Bed not found');
    res.send('Bed deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
