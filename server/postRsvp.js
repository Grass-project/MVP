const db = require('../db/index.js');

const postRsvp = async (req, res) => {

   await db.save(req.body);

   res.sendStatus(201);


}

module.exports = postRsvp;