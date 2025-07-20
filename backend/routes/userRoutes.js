const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/saves_form_data', userController.add_user);

module.exports = router;
