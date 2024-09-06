const Branch = require('../models/branchModel');
const IVFCenter = require('../models/ivfCentersModel');
const State = require('../models/stateModel');
const Admin = require('../models/adminModel');

// Create a new branch
const createBranch = async (req, res) => {
    try {
        const { center, area, assignAdmin } = req.body;

        // Fetch IVF center to get the state
        const ivfCenter = await IVFCenter.findById(center);
        if (!ivfCenter) {
            return res.status(404).json({ message: 'IVF Center not found' });
        }

        const newState = ivfCenter.address.state; // Assign state from IVF center

        // Create new branch
        const branch = new Branch({
            center,
            state: newState,
            area,
            assignAdmin
        });

        const savedBranch = await branch.save();
        res.status(201).json(savedBranch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all branches
const getAllBranches = async (req, res) => {
    try {
        const branches = await Branch.find({ deleted: false }).populate('center state assignAdmin');
        if(branches.length === 0 )
        {
           return res.status(200).json({ message : "no branches"});
        }
        res.status(200).json(branches);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single branch by ID
const getBranchById = async (req, res) => {
    try {
        const branch = await Branch.findById({ _id: req.params.id, deleted: false }).populate('center assignAdmin');
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        res.status(200).json(branch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a branch
const updateBranch = async (req, res) => {
    try {
        const { center, area, assignAdmin } = req.body;

        // Fetch IVF center to get the state
        const ivfCenter = await IVFCenter.findById(center);
        if (!ivfCenter) {
            return res.status(404).json({ message: 'IVF Center not found' });
        }

        const newState = ivfCenter.address.state; // Assign state from IVF center

        const branch = await Branch.findById(req.params.id);
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }

        branch.center = center;
        branch.state = newState;
        branch.area = area;
        branch.assignAdmin = assignAdmin;

        const updatedBranch = await branch.save();
        res.status(200).json({ 
            message : "Branch updated successfully",
            data : updatedBranch,
        }
        );
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a branch
const deleteBranch = async (req, res) => {
    try {
        const branch = await Branch.findByIdAndUpdate(req.params.id,
            { deleted: true },
            { new: true }
        );
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        res.status(200).json({ message: 'Branch deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateBranchStatus = async (req, res) => {
    try {
        const branch = await Branch.findById(req.params.id);
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }

        // Toggle the status (true to false or false to true)
        branch.status = !branch.status;

        const updatedBranch = await branch.save();
        res.status(200).json({message : "Branch status updated successfully",
            updateBranch : updateBranch
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createBranch,
    updateBranch,
    getAllBranches,
    deleteBranch,
    getBranchById,
    updateBranchStatus
}
