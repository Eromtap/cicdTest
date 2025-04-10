const { onRequest } = require('firebase-functions/v2/https');
const express = require('express');

const app = express();

// Define simple route
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// THIS IS THE MOST IMPORTANT PART
exports.app = onRequest(app);

// Optional: Run express server locally for testing
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listening locally on port ${PORT}`);
  });
}


// Add this for testing (Supertest needs raw Express app)
module.exports = { app, expressApp: app };