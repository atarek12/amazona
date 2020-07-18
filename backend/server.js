const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const config = require('./config')
const path = require('path');

const app = express();

// Import Routes
app.use('/api/products', require('./routes/productsRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/uploads', require('./routes/uploadRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));


// connect Database testAdmin:testPass --> there are two ways to connect --> using .env and using config file
//mongooose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to database'))

// Method 2
const mongodbUrl = config.MONGODB_URL;
mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, () => console.log('connected to database'))
    .catch((error) => console.log(error.reason));

// this step for real deployment
if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, '/../frontend/build')));
	app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});
}


// Deploy the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));

