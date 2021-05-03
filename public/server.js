// Dependencies
const express = require('express');
const path = require('path');

// Set Server
const server = express();
const PORT = 3000;

// Routes
server.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
server.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// API Routes




server.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));