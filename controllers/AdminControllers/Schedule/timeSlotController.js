// app/controllers/timeSlotController.js
const TimeSlot = require('../../../models/AdminModels/Schedule/timeSlotModel');

// Create a new time slot
const createTimeSlot = async (req, res) => {
  const { name, time, status } = req.body;
  try {
    const timeSlot = new TimeSlot({ name, time, status });
    await timeSlot.save();
    res.json({ message: 'Time slot created', timeSlot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all time slots
const getTimeSlots = async (req, res) => {
  try {
    const timeSlots = await TimeSlot.find();
    res.json(timeSlots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single time slot by ID
const getTimeSlotById = async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findById(req.params.id);
    if (!timeSlot) return res.status(404).json({ message: 'Time slot not found' });
    res.json(timeSlot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a time slot by ID
const updateTimeSlot = async (req, res) => {
  try {
    const { name, time, status } = req.body;
    const timeSlot = await TimeSlot.findByIdAndUpdate(req.params.id, { name, time, status }, { new: true });
    if (!timeSlot) return res.status(404).json({ message: 'Time slot not found' });
    res.json({ message: 'Time slot updated', timeSlot });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a time slot by ID
const deleteTimeSlot = async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findByIdAndDelete(req.params.id);
    if (!timeSlot) return res.status(404).json({ message: 'Time slot not found' });
    res.json({ message: 'Time slot deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTimeSlot, getTimeSlots, getTimeSlotById, updateTimeSlot, deleteTimeSlot };
