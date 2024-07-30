
const Room = require('../../../models/AdminModels/BedManager/roomModel');

const createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    const savedRoom = await newRoom.save();
    res.status(201).json({message: "Room Added Succesfully",savedRoom});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isDeleted: false });
    res.send({message:"All Rooms Retrieved Succesfully",rooms});
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, { isDeleted: true, deletedAt: new Date() });
    if (!room) return res.status(404).send('Room not found');
    res.send('Room deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {createRoom, getRooms, getRoomById, deleteRoom, updateRoom};
