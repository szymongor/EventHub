const mongoose = require('mongoose');
const Event = mongoose.model('event');

module.exports = app => {
  app.post('/addEvent', (req, res) => {
    console.log('REQUEST: ', req.body);
    res.send({});
    //new Event({ firstName: 'test', lastName: 'lastTest' }).save();
  });
};
