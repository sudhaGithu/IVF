const Package = require('../../../models/AdminModels/BillingManagement/packageModel');

exports.createPackage = async (req, res) => {
    const { packageName, description, services, discount, status } = req.body;
    try {
        const newPackage = new Package({
            packageName,
            description,
            services,
            discount,
            status
        });

        await newPackage.save();
        res.status(201).json({ message: 'Package created successfully', newPackage });
    } catch (err) {
        console.error('Error creating package:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json({message:"Packages Retrieved Succesfully",packages});
    } catch (err) {
        console.error('Error retrieving packages:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getPackage = async (req, res) => {
    const { id } = req.params;
    try {
        const package = await Package.findById(id);
        if (!package) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(package);
    } catch (err) {
        console.error('Error retrieving package:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.updatePackage = async (req, res) => {
    const { id } = req.params;
    const { packageName, description, services, discount, status } = req.body;
    try {
        const updatedPackage = await Package.findByIdAndUpdate(id, {
            packageName,
            description,
            services,
            discount,
            status
        }, { new: true });
        if (!updatedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(updatedPackage);
    } catch (err) {
        console.error('Error updating package:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.deletePackage = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPackage = await Package.findByIdAndDelete(id);
        if (!deletedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json({ message: 'Package deleted successfully' });
    } catch (err) {
        console.error('Error deleting package:', err);
        res.status(400).json({ error: err.message });
    }
};
