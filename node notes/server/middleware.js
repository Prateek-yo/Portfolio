const express = require('express');
const app = express();

// Middleware function to check if user is admin
function isAdmin(req, res, next) {
  const { isAdmin } = req.query;

  if (isAdmin === "true") {
    next();
  } else {
    res.send("You are not authorized to access this page");
  }
}

// Default route
app.get('/', (req, res) => {
  res.send('Welcome! MASTER');
});

// Admin route
app.get('/admin', isAdmin, (req, res) => {
  res.send('You are an admin, you can access this product');
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
