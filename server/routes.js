'use strict';

var index = require('./routes/index');
var user = require('./model/user/user.route');

module.exports = function(app) {
  app.use('/', index);
  app.use('/user', user);
}