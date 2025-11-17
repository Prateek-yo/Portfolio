const mysql = require('mysql2');
const express = require('express');
const app = express();

// MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Drishti@1234',
  database: 'newton_donalth',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL!');
});

// Route to get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.status(200).json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});
