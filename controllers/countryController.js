const Country = require('../models/countryyModel');

const createCountry = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name ) {
        return res.status(400).json({ message : 'Name is required' });
    }

    const newCountry = new Country({ name });
    await newCountry.save();

    res.status(201).json({ message: 'Country created successfully', Country: newCountry });
} catch (error) {
    console.error('Error creating Country:', error);
    res.status(500).json({ error: error.message });
}
};

const getAllCountry = async (req, res) => {
  try {
    const country = await Country.find({ deleted: false });
    if(country.length === 0)
    {
      res.status(200).json({message : "no countries"});
    }
    res.status(200).json(country);
  } catch (err) {
    console.error('Error retrieving states:', err);
    res.status(500).send({error : err.messages});
  }
};

// Route to get country by ID (excluding soft deleted)
const getCountryById = async (req, res) => {
  try {
    const country = await Country.findById({ _id: req.params.id, deleted: false });
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByIdAndUpdate(req.params.id,
      { deleted: true },
      { new: true }
    );

    if (!country) {
      return res.status(404).json({ error: 'country not found' });
    }

    res.json({ message: 'country deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};




module.exports = { 
  createCountry, 
  getAllCountry,
  getCountryById,
  deleteCountry}