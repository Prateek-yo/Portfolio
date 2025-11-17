const express = require('express');
const app = express();

// Simple middleware function
app.use((req, res, next) => {
  console.log('Middleware executed'); // Comment: Logs when middleware runs
  next(); // Comment: Calls the next middleware or route
});

// Route
app.get('/', (req, res) => {
  res.send('Hello from middleware example');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
