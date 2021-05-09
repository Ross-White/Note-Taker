// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes');

// Set Server
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);

// Listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
