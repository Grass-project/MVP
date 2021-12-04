const path = require("path");
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const getPhotos = require('./getPhotos.js');
const postRsvp = require('./postRsvp.js');
const getRsvp = require('./getRsvp.js');
const deleteRsvp = require('./deleteRsvp.js');

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/photos', getPhotos);

app.get('/rsvp', getRsvp);

app.post('/rsvp', postRsvp);

app.delete('/rsvp', deleteRsvp);

app.listen(port, () => {
  console.log(`server listening on ${port}` );
})