var mongoose = require('mongoose');
var userJSON = require('./user');
mongoose.Promise = Promise;

var userSchema = mongoose.Schema(userJSON);
var User = mongoose.model('User', userSchema);

module.exports.add = (req, res, next) => {
  User.create(req.body)
    .then(result => res.json(result))
    .catch(err => next(err));
};

module.exports.list = (req, res, next) => {
  User.find()
    .then(list => res.json(list))
    .catch(err => next(err));
}