const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  eventDate: Date
});

const Event = (module.exports = mongoose.model('event', eventSchema));

module.exports.addEvent = (event, callback) => {
  var event = new Event(event);
  event.save(callback);
};
