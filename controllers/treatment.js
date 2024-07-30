const Treatment = require('../models/treatment')

// Create a new treatment
const createTreatment = async (req, res) => {
    try {
        const { name, description } = req.body;
        const image = req.file.path;  // Assuming 'image' field in form-data

        const newTreatment = new Treatment({ name, description, image });
        await newTreatment.save();
        res.status(201).json(newTreatment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Read treatment by ID (including soft-deleted if needed)
const getTreatmentById =  async (req, res) => {
    try {
      const treatment = await Treatment.findById(req.params.id);
      if (!treatment || treatment.deleted) {
        return res.status(404).send('Treatment not found');
      }
      res.send(treatment);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  };


// Read all treatments
const getallTreatments =  async (req, res) => {
    try {
        const treatments = await Treatment.find({ deleted: false });
        res.send(treatments);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
      }
};

// Update a treatment
const updateTreatment =  async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const updatedTreatment = await Treatment.findByIdAndUpdate(id, { name, description }, { new: true });
        res.json(updatedTreatment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a treatment
const deleteTreatment =  async (req, res) => {
    try {
        const treatment = await Treatment.findByIdAndUpdate(req.params.id, {
          deleted: true
        }, { new: true });
    
        if (!treatment) {
          return res.status(404).send( { message : 'Treatment not found' });
        }
    
        res.status(200).send({message : 'Treatment deleted successfully'});
      } catch (err) {
        console.error(err);
        res.status(500).send( { error : err.message } );
      }
};

// Toggle treatment status
const treatmentStatus =  async (req, res) => {
    try {
        const { id } = req.params;

        // Find the treatment by ID
        const treatment = await Treatment.findById(id);

        if (!treatment) {
            return res.status(404).json({ message: 'Treatment not found' });
        }

        // Toggle the status
        treatment.status = !treatment.status;

        // Save the updated treatment
        await treatment.save();

        res.json(treatment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createTreatment,
    getallTreatments,
    updateTreatment,
    deleteTreatment,
    treatmentStatus,
    getTreatmentById
};