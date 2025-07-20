const db = require('../config/db');

// Get all states
async function get_all_states() {
  const [rows] = await db.query('SELECT * FROM STATES');
  return rows;
}

// Get state by country ID
async function get_states_by_country_id(id) {
  const [rows] = await db.query('SELECT * FROM STATES WHERE COUNTRY_ID = ?', [id]);
  return rows;
}

// Create new state according to country
async function add_state(state_name, country_id) {
      const [result] = await db.query(
            "INSERT INTO STATES (STATE_NAME, COUNTRY_ID) VALUES (?, ?)", 
            [state_name, country_id]
      );
      return result.insertId;
}

module.exports = {
  get_all_states,
  get_states_by_country_id,
  add_state,
};