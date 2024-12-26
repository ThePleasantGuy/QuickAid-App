const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json()); // This is useful if you plan to handle JSON data

// Serve static files from the public directory
app.use(express.static(path.join(__dirname))); // Serve static files from the current directory (public)

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html from the current directory
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
