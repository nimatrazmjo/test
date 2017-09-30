var Time = require('./time.schema');

/** List time */
module.exports.list = (req, res) => {
  Time.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

/** Add time */
module.exports.add = (req, res) => {
  let time = collection(req);
  Time.create(time)
    .then(result => res.json(result))
    .catch(err => res.json(err));
}

function collection(req) {
  var time = {}
  time.count = req.body.count;
  time.unit = req.body.unit;
  time.description = req.body.description;
  time.additive = req.body.additive;
  time.created = req.body.created;
  time.links = req.body.links;
  time.user_id = req.body.user_id;
  return time;
}