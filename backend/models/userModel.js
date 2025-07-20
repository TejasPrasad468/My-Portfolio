const db = require('../config/db');

// Get all users
async function get_all_users() {
  const [rows] = await db.query('SELECT * FROM USERS');
  return rows;
}

// Get user by ID
async function get_user_by_id(id) {
  const [rows] = await db.query('SELECT * FROM USERS WHERE USER_ID = ?', [id]);
  return rows[0];
}
  
// Create new user
async function add_user(userData) {
  const { username, email, country, state, message } = userData;
  const [result] = await db.query(
      "INSERT INTO USERS (USERNAME, EMAIL_ID, COUNTRY_ID, STATE_ID, MESSAGE) VALUES (?, ?, ?, ?, ?)", 
      [username, email, country, state, message]
  );
  return result.insertId;
}

module.exports = {
  get_all_users,
  get_user_by_id,
  add_user,
};