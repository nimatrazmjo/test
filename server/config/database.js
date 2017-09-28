'use strict';

var mongoose = require('mongoose');
var dotEnv = require('dotenv');
dotEnv.load();

module.exports = function(app) {
  mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, { useMongoClient: true, promiseLibrary: global.Promise });

  var con = mongoose.connection;

  con.on('error', console.error.bind('Database does not connected'));

  con.once('open', function callback() {
    console.log('Database has been connected to ' + process.env.DB_NAME);
  });

}