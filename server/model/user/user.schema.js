var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


let userCollection = {
  "firstName": "string",
  "lastName": "string"
}
let userSchema = mongoose.Schema(userCollection);

module.exports = mongoose.model('User', userSchema);