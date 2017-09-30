var express = require('express');
var Router = express.Router();
var time = require('./time.model');

Router.route('/')
  .get(time.list)
  .post(time.add);

module.exports = Router;