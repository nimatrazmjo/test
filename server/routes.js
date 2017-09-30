'use strict';

var index = require('./routes/index');
var user = require('./model/user/user.route');
var time = require('./model/time/time.route');

module.exports = function(app) {
  app.use('/', index);
  app.use('/user', user);
  app.use('/time', time);
}