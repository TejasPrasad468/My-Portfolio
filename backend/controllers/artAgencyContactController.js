const art_contact_model = require("../models/artAgencyContactModel");

const add_contact = async (req, res) => {
  try {
      const contact = await art_contact_model.save_contact_data(req.body);
      res.status(201).json({ message: "Message Sent Sucessfully.", id: contact });
  }
  catch (error) {
      res.status(400).json({ message: error.message });
  }
};

module.exports = {
      add_contact
};