const db = require('../db/index.js');

const deleteRsvp = async (req, res) => {

  const id = req.query.id;
  await db.remove(id);
  res.sendStatus(200)
} ;

module.exports = deleteRsvp;