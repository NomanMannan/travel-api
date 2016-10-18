'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');

const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
mongoose.connect(config.getDBConnectionString());

setupController(app);

app.listen(PORT);