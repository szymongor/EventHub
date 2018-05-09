const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  firstName: String,
  lastName: String
});

mongoose.model('event', eventSchema);
