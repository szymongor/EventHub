const mongoose = require('mongoose');
const Event = require('../models/Event');

module.exports = app => {
  app.post('/api/addEvent', (req, res) => {
    var event = req.body;
    Event.addEvent(event, (err, event) => {
      if (err) {
        throw err;
      }
      res.json(event);
    });
  });
};
