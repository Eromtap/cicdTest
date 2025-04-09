// Import the express library
const express = require('express');

// Create an express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



module.exports = app;