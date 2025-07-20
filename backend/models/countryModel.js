const db = require('../config/db');

// Get all countries
async function get_all_countries() {
  const [rows] = await db.query('SELECT * FROM COUNTRIES');
  return rows;
}

// Get country by ID
async function get_country_by_id(id) {
  const [rows] = await db.query('SELECT * FROM COUNTRIES WHERE COUNTRY_ID = ?', [id]);
  return rows[0];
}

// Create new country
async function add_country(country_name) {
      const [result] = await db.query(
            "INSERT INTO COUNTRIES (COUNTRY_NAME) VALUES (?)", 
            [country_name]
      );
      return result.insertId;
}

module.exports = {
  get_all_countries,
  get_country_by_id,
  add_country,
};