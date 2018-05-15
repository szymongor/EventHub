const mongoose = require('mongoose');
const Event = require('../models/Event');

module.exports = app => {
  app.post('/addEvent', (req, res) => {
    var event = req.body;
    Event.addEvent(event, (err, event) => {
      if (err) {
        throw err;
      }
      res.json(event);
      // Event.find({}, (err, docs) => {
      //   console.log(docs);
      // });
    });
  });
};
