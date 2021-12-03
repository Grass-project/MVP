const path = require("path");
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const getPhotos = require('./getPhotos.js');

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/photos', getPhotos);

app.listen(port, () => {
  console.log(`server listening on ${port}` );
})