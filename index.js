const express = require('express');
const mongoose = require('mongoose');
require('./models/Event');
const getRoute = require('./routes/getRoute');

const mongoURI = require('./config/dbConnect').dbURI;

mongoose.connect(mongoURI);

const app = express();
getRoute(app);

app.listen(5000);
