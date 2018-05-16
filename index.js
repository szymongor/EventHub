const express = require('express');
const mongoose = require('mongoose');
require('./models/Event');
const postEvent = require('./routes/postEvent');
const bodyParser = require('body-parser');

const mongoURI = require('./config/dbConnect').dbURI;

mongoose.connect(mongoURI);

const app = express();
app.use(bodyParser.json());

postEvent(app);

app.listen(5000);
