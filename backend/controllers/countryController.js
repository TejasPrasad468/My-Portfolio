const country = require('../models/countryModel');

const get_all_countries = async(req, res) => {
    try {
        const countries = await country.get_all_countries();
        res.json({countries:countries});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    get_all_countries
};