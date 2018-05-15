const express = require('express');
const mongoose = require('mongoose');
require('./models/Event');
const getRoute = require('./routes/getRoute');
const postEvent = require('./routes/postEvent');
const bodyParser = require('body-parser');

const mongoURI = require('./config/dbConnect').dbURI;

mongoose.connect(mongoURI);

const app = express();
app.use(bodyParser.json());

getRoute(app);
postEvent(app);

app.listen(5000);
