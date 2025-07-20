const state = require('../models/stateModel');

const get_all_states = async(req, res) => {
    try {
        const states = await state.get_all_states();
        res.json({states:states});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

const get_states_by_country_id = async(req, res) => {
    try {
        const country_id  = req.body.params.country_id;
        const states = await state.get_states_by_country_id(country_id);
        res.json({states:states});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    get_all_states,
    get_states_by_country_id
};