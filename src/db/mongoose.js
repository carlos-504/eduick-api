const mongoose = require('mongoose');

const conn = mongoose.connect('mongodb://localhost:127.0.0.1:27017/edusynch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = conn;
