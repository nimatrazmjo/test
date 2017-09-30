// modules
var mongoose = require('mongoose');

// user promise for any action 
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

// parse json
var raw = require('./json/schema.json');

// create a schema
var timeSignatureSchema = Schema(raw);

// compile the model
var TimeSignature = mongoose.model('TimeSignatures', timeSignatureSchema);

module.exports = TimeSignature;