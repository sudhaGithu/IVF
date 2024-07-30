
const { error } = require('winston');
const State = require('../models/stateModel');

const createState = async (req, res) => {
  try {
    const { name } = req.body;
    const country = req.params.id

    const newState = new State({ name, country });

    await newState.save();

    res.status(201).json({
        message: 'State created successfully',
        State : newState,
    });
} catch (error) {
    console.error('Error creating State:', error);
    res.status(500).json({ error: error.message });
}
};

const getstatesBycountry = async (req, res) => {
try {
    const { id } = req.params;
    const states = await State.find({ country: id, deleted: false }).populate('country', 'name');
    
    if(states.length === 0)
      {
       return res.status(200).json({message : "no states present"})
      }
    
    res.status(200).json(states);
} catch (error) {
    console.error('Error retrieving states:', error);
    res.status(500).json({ error: error.message });
}
};

// Read state by ID (including soft-deleted if needed)
const getStateById =  async (req, res) => {
  try {
    const state = await State.findById(req.params.id).populate('country');
    if (!state || state.deleted) {
      return res.status(404).send('State not found');
    }
    res.send(state);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// // Update state by ID
// const updateStateById =  async (req, res) => {
//   try {
//     const { name  } = req.body;
//     const state = await State.findByIdAndUpdate(req.params.id, {
//       name
//     }, { new: true });

//     if (!state) {
//       return res.status(404).send('State not found');
//     }

//     res.send(state);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// };


// Soft delete state by ID
const deleteStateById = async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(req.params.id, {
      deleted: true
    }, { new: true });

    if (!state) {
      return res.status(404).send('State not found');
    }

    res.status(200).send('State deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send({ message : err.message });
  }
};

module.exports = { 
  createState, 
  getstatesBycountry,
  deleteStateById,
  getStateById
}