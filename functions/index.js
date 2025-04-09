const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Handle GET requests to root
app.get('/', (req, res) => {
  res.send('Hello World from Express running inside Firebase Functions!');
});

// Export your Express app as a Firebase HTTP function
exports.app = functions.https.onRequest(app);