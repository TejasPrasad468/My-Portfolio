const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    // ✅ TiDB Cloud typically requires SSL
    rejectUnauthorized: true
  }
});

// Test the connection
async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('✅ DB connected successfully. Test result:', rows[0].result);
  } catch (err) {
    console.error('❌ DB connection failed:', err.message);
  }
}

// Run the test
testConnection();

module.exports = db;