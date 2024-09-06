const User = require('../../models/TicketingModels/userModel');
const Country = require('../../models/countryModel');
const Role = require('../../models/Roles/role');

const createUser = async (req, res) => {
    const { firstName, lastName, email, phoneNo, city, address, country, password, role, photo } = req.body;
    try {
        const countryRecord = await Country.findById(country);
        if (!countryRecord) {
            return res.status(404).json({ message: 'Country not found' });
        }

        const roleRecord = await Role.findById(role);
        if (!roleRecord) {
            return res.status(404).json({ message: 'Role not found' });
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            phoneNo,
            city,
            address,
            country,
            password,
            role,
            photo
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('country').populate('role');
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createUser,
    getUsers
}