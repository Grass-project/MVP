const path = require("path");
const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(port, () => {
  console.log(`server listening on ${port}` );
})