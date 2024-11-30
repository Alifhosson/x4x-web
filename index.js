const express = require('express');
const path = require('path');

const app = express();

// Static ফাইল সার্ভ করার জন্য:
app.use(express.static(path.join(__dirname, 'alif')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'alif', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});