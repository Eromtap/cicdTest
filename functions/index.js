const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express running inside Firebase Functions!');
});

// VERY IMPORTANT: export the Express app properly
exports.app = functions.https.onRequest(app);