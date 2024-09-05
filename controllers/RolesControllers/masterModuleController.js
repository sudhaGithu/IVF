const MasterModule = require('../../models/Roles/masterModuleModel')


// Create a new master module
const addmasterModule =  async (req, res) => {
    try {
        const masterModule = new MasterModule(req.body);
        await masterModule.save();
        res.status(201).send(masterModule);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all master modules (excluding soft-deleted ones)
const getallmasterModule = async (req, res) => {
    try {
        const masterModules = await MasterModule.find({ deletedAt: null });
        res.status(200).send(masterModules);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single master module by ID (excluding soft-deleted ones)
const getmasterModule = async (req, res) => {
    try {
        const masterModule = await MasterModule.findOne({ _id: req.params.id, deletedAt: null });
        if (!masterModule) {
            return res.status(404).send('MasterModule not found');
        }
        res.status(200).send(masterModule);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a master module
const updatemasterModule = async (req, res) => {
    try {
        const masterModule = await MasterModule.findOneAndUpdate(
            { _id: req.params.id, deletedAt: null },
            req.body,
            { new: true, runValidators: true }
        );
        if (!masterModule) {
            return res.status(404).send('MasterModule not found');
        }
        res.status(200).send(masterModule);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Soft delete a master module
const deletemasterModule = async (req, res) => {
    try {
        const masterModule = await MasterModule.findOneAndUpdate(
            { _id: req.params.id, deletedAt: null },
            { deletedAt: new Date() },
            { new: true }
        );
        if (!masterModule) {
            return res.status(404).send('MasterModule not found');
        }
        res.status(200).send(masterModule);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Restore a soft-deleted master module
const restoremasterModule = async (req, res) => {
    try {
        const masterModule = await MasterModule.findOneAndUpdate(
            { _id: req.params.id, deletedAt: { $ne: null } },
            { deletedAt: null },
            { new: true }
        );
        if (!masterModule) {
            return res.status(404).send('MasterModule not found');
        }
        res.status(200).send(masterModule);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    addmasterModule,
    getallmasterModule,
    getmasterModule,
    updatemasterModule,
    deletemasterModule,
    restoremasterModule
}