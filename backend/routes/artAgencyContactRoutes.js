const express = require('express');
const router = express.Router();
// const {save_contact_data} = require('../models/artAgencyContactModel');
const art_contact_controller = require('../controllers/artAgencyContactController');

router.post('/submit_data', art_contact_controller.add_contact);

module.exports = router;