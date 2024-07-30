const Schedule = require('../../../models/AdminModels/Schedule/scheduleModel');

const createSchedule = async (req, res) => {
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();
    res.status(201).send(newSchedule);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find({ isDeleted: false });
    res.send(schedules);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findOne({ _id: req.params.id, isDeleted: false });
    if (!schedule) return res.status(404).send('Schedule not found');
    res.send(schedule);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findOneAndUpdate({ _id: req.params.id, isDeleted: false }, req.body, { new: true });
    if (!schedule) return res.status(404).send('Schedule not found');
    res.send(schedule);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findOneAndUpdate({ _id: req.params.id }, { isDeleted: true, deletedAt: new Date() });
    if (!schedule) return res.status(404).send('Schedule not found');
    res.send('Schedule deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {createSchedule, getSchedules, getScheduleById, deleteSchedule, updateSchedule}
