var mongoose = require('mongoose');
var logger = require('morgan');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

var db = mongoose.connection;

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;