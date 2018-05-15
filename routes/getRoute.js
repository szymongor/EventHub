const mongoose = require('mongoose');
const Event = mongoose.model('event');

module.exports = app => {
  app.get('/', (req, res) => {
    console.log('Hi');
    res.send({ hi: 'there' });
  });

  app.get('/add', (req, res) => {
    res.send({ hi: 'added' });
    new Event({ firstName: 'test', lastName: 'lastTest' }).save();
  });
};
