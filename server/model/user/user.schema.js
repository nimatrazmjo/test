var mongoose = require('mongoose');
var user = require('./json/user.json');
mongoose.Promise = global.Promise;
let userSchema = mongoose.Schema(user);

module.exports = mongoose.model('User', userSchema);