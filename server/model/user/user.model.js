var User = require('./user.schema');

/** Add time signature */
module.exports.add = (req, res) => {
  User.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
};

/** List time signature */
module.exports.list = (req, res) => {
  User.find()
    .then(list => res.json(list))
    .catch(err => res.json(err));
}