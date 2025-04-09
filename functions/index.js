const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Your route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Export Express app for testing
module.exports = app;

// Export Firebase Function for deployment
exports.app = functions.https.onRequest(app);