const db = require('../db/index.js');

const getRsvp = async (req, res) => {

  db.read()
  .then(data => res.send(data))
  .catch(err => {
    console.log('get rsvp err', err)
  });

}

module.exports = getRsvp;