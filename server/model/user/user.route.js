var express = require('express');
var router = express.Router();
var user = require('./user.model');

/* GET home page. */
router.route('/')
  .get(user.list)
  .post(user.add);

module.exports = router;