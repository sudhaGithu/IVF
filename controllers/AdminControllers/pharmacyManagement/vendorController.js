const Vendor = require('../../../models/AdminModels/pharmacyManagement/vendorModel'); 

const createVendor = async (req, res) => {
    try {
        const { name, address, phoneNo, payable, due } = req.body;

        const newVendor = new Vendor({
            name,
            address,
            phoneNo,
            payable,
            due
        });

        await newVendor.save();
        res.status(201).json({message: "Vendor Added Succesfully",newVendor});
    } catch (err) {
        console.error('Error creating vendor:', err);
        res.status(500).send({ error: err.message });
    }
};
const getVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json({message: "All Vendors Retrieved Succesfully",vendors});
    } catch (err) {
        console.error('Error fetching vendors:', err);
        res.status(500).send({ error: err.message });
    }
};
// Update Vendor
const updateVendor = async (req, res) => {
    try {
        const { vendorId } = req.params;
        const { name, address, phoneNo, payable, due } = req.body;

        const updatedVendor = await Vendor.findByIdAndUpdate(
            vendorId,
            { name, address, phoneNo, payable, due },
            { new: true, runValidators: true }
        );

        if (!updatedVendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        res.status(200).json(updatedVendor);
    } catch (err) {
        console.error('Error updating vendor:', err);
        res.status(500).send({ error: err.message });
    }
};
// Delete Vendor
const deleteVendor = async (req, res) => {
    try {
        const { vendorId } = req.params;

        const deletedVendor = await Vendor.findByIdAndDelete(vendorId);

        if (!deletedVendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (err) {
        console.error('Error deleting vendor:', err);
        res.status(500).send({ error: err.message });
    }
};

module.exports = {createVendor, getVendors, updateVendor, deleteVendor};