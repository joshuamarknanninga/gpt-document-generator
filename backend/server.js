// backend/server.js

require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const path = require('path');
const gptRoutes = require('./routes/gpt');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/gpt', gptRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// The "catchall" handler: for any request that doesn't match API routes, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
