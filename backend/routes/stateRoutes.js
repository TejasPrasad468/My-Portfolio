const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController');

router.get('/', stateController.get_all_states);
router.post('/states_by_id', stateController.get_states_by_country_id);

module.exports = router;