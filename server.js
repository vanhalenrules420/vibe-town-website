const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve static.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static.html'));
});

// Log all requests to help with debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

const PORT = 2570;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
