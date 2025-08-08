const db = require('../config/db');

async function save_contact_data(userData) {
    const {name, phone, email, message} = userData;
    
    const [result] = await db.query(
      "INSERT INTO ART_AGENCY_CONTACTS (NAME, PHONE, EMAIL_ID, MESSAGE) VALUES (?, ?, ?, ?)", 
      [name, phone, email, message]
    );

    return result.insertId;
}

module.exports = {
    save_contact_data
}