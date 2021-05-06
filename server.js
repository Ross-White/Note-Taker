// Dependencies
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Set Server
const server = express();
const PORT = process.env.PORT || 3000;

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('public'));

// Routes
server.use('/api', apiRoutes);
server.use('/', htmlRoutes);

// Listen
server.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));