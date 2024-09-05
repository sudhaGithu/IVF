const Service = require('../../../models/AdminModels/BillingManagement/serviceModel');

const createService = async (req, res) => {
    const { serviceName, description, quantity, rate, status } = req.body;
    try {
        const newService = new Service({
            serviceName,
            description,
            quantity,
            rate,
            status
        });

        await newService.save();
        res.status(201).json({ message: 'Service created successfully', newService });
    } catch (err) {
        console.error('Error creating service:', err);
        res.status(400).json({ error: err.message });
    }
};

const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({message:"Servises Retrived Succesfully",services});
    } catch (err) {
        console.error('Error retrieving services:', err);
        res.status(400).json({ error: err.message });
    }
};

const getService = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(service);
    } catch (err) {
        console.error('Error retrieving service:', err);
        res.status(400).json({ error: err.message });
    }
};

const updateService = async (req, res) => {
    const { id } = req.params;
    const { serviceName, description, quantity, rate, status } = req.body;
    try {
        const updatedService = await Service.findByIdAndUpdate(id, {
            serviceName,
            description,
            quantity,
            rate,
            status
        }, { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(updatedService);
    } catch (err) {
        console.error('Error updating service:', err);
        res.status(400).json({ error: err.message });
    }
};

const deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedService = await Service.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (err) {
        console.error('Error deleting service:', err);
        res.status(400).json({ error: err.message });
    }
};


module.exports = {
    createService,
    getService,
    getServices,
    updateService,
    deleteService
}