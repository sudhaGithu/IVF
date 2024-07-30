const Country = require('../../models/TicketingModels/countryModel');

exports.createCountry = async (req, res) => {
    const { name, code } = req.body;
    try {
        const country = new Country({ name, code });
        await country.save();
        res.status(201).json({ message: 'Country created successfully', country });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.find();
        res.status(200).json(countries);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
