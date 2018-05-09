const express = require('express');
const mongoose = require('mongoose');
require('./models/Event');
const getRoute = require('./routes/getRoute');

const mongoURI = 'mongodb://root:root@ds117730.mlab.com:17730/eventhub-dev';

mongoose.connect(mongoURI);

const app = express();
getRoute(app);

app.listen(5000);
