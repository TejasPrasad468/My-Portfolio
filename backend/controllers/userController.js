const user_model = require("../models/userModel");

const get_all_users = async (req, res) => {
  try {
      const users = await user_model.get_all_users();
      res.json(users);
  }
  catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const get_user_by_id = async (req, res) => {
  try {
      const user = await user_model.get_user_by_id(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
  }
  catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Add user
const add_user = async (req, res) => {
  try {
      const user = await user_model.add_user(req.body);
      res.status(201).json({ message: "Message Sent Sucessfully.", id: user });
  }
  catch (error) {
      res.status(400).json({ message: error.message });
  }
};

module.exports = {
      get_all_users,
      get_user_by_id,
      add_user,
};