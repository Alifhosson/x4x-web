const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "alif" directory
app.use(express.static(path.join(__dirname, 'alif')));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'alif', 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Error loading the page.');
    }
  });
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
