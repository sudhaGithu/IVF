const IVFCenter = require('../models/ivfCentersModel');
const moment = require('moment');


// Get all IVF centers
const getAllIVFCenters = async (req, res) => {
    try {
        const ivfCenters = await IVFCenter.find({ deleted: false });
        if(ivfCenters.length === 0 )
        {
            return res.status(200).json({ message : "no centers found "})
        }
        res.json(ivfCenters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get an IVF center by id
const getIVFCenterById = async (req, res) => {
    try {
        const ivfCenter = await IVFCenter.findById(req.params.id);
        if (!ivfCenter || ivfCenter.deleted) {
            return res.status(404).json({ message: 'IVF Center not found' });
        }
        res.json(ivfCenter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new IVF center
const createIVFCenter = async (req, res) => {
    const {IVF_Center_name , phoneNumber, address, assignAdmin } = req.body;
    const newIVFCenter = new IVFCenter({ IVF_Center_name, phoneNumber, address, assignAdmin });

    try {
        const savedIVFCenter = await newIVFCenter.save();
        res.status(201).json({
            message : "IVF Center created successfully",
            data : savedIVFCenter});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an IVF center
const updateIVFCenter = async (req, res) => {
    try {
        const { IVF_Center_name, phoneNumber, address, assignAdmin } = req.body;
        const ivfCenter = await IVFCenter.findById(req.params.id);
        
        if (!ivfCenter) {
            return res.status(404).json({ message: 'IVF Center not found' });
        }

        ivfCenter.IVF_Center_name = IVF_Center_name;
        ivfCenter.phoneNumber = phoneNumber;
        ivfCenter.address = address;
        ivfCenter.assignAdmin = assignAdmin;

        const updatedIVFCenter = await ivfCenter.save();
        res.status(200).json({
            message : "IVF Center updated successfully", 
            updatedIVFCenter : updatedIVFCenter });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an IVF center
const deleteIVFCenter = async (req, res) => {
    try {
        const ivfCenter = await IVFCenter.findByIdAndUpdate(req.params.id, {
            deleted: true
        }, { new: true });

        if (!ivfCenter) {
            return res.status(404).send('IVF Center not found');
        }

        res.status(200).send({message : 'IVF Center deleted successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Toggle IVF center status
const stausChange = async (req, res) => {
    try {
        const ivfCenter = await IVFCenter.findById(req.params.id);
        if (!ivfCenter) {
            return res.status(404).json({ message: 'IVF Center not found' });
        }

        ivfCenter.status = !ivfCenter.status; // Toggle status

        const updatedIVFCenter = await ivfCenter.save();
        res.json(updatedIVFCenter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Search IVF centers by zip code and creation date
const searchIVFCentersByZipCodeAndDate = async (req, res) => {
    try {
        const { zipcode, createdOn } = req.body;
        // Parse the createdOn date to ignore time part and compare with date only
        const startDate = moment(createdOn, 'YYYY-MM-DD').startOf('day');
        const endDate = moment(createdOn, 'YYYY-MM-DD').endOf('day');
        const ivfCenters = await IVFCenter.find({
            'address.zipcode': zipcode,
            createdOn: {
                $gte: startDate,
                $lte: endDate
            }
        });

        if(ivfCenters.length === 0)
            {
                res.status(200).json({message : "there is no centers based on given values"})
            }
        else{
            res.json(ivfCenters);
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllIVFCenters,
    createIVFCenter,
    updateIVFCenter,
    deleteIVFCenter,
    getIVFCenterById,
    stausChange,
    searchIVFCentersByZipCodeAndDate
}