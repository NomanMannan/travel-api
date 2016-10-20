'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const roleController = require('./controllers/roleController');
const userController = require('./controllers/userController');



const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
mongoose.connect(config.getDBConnectionString());

setupController(app);
roleController(app);
userController(app);

app.listen(PORT);