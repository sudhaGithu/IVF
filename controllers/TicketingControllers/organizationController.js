const Organization = require('../../models/TicketingModels/organizationModel');
const Country = require('../../models/TicketingModels/countryModel');

exports.createOrganization = async (req, res) => {
    const { name, phone, email, address, city, state, country, postalCode } = req.body;
    try {
        const countryRecord = await Country.findById(country);
        if (!countryRecord) {
            return res.status(404).json({ message: 'Country not found' });
        }

        const newOrganization = new Organization({
            name,
            phone,
            email,
            address,
            city,
            state,
            country,
            postalCode
        });

        await newOrganization.save();
        res.status(201).json({ message: 'Organization created successfully', newOrganization });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find().populate('country');
        res.status(200).json(organizations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
