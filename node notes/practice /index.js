// express_example.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(4000, () => {
  console.log('Express server running at http://localhost:4000/');
});
