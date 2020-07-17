const express = require('express');
//const mongooose = require('mongoose');
//require('dotenv/config');
const app = express();

// Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
app.use('/api/products', require('./routes/productsRoutes'));

// connect Database testAdmin:testPass
//mongooose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to database'))

// Deploy the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT))