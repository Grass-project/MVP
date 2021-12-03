const axios = require('axios');
const key = require('../config.js');

const getPhotos = (req, res) => {

  const ep = `https://api.unsplash.com/photos/?client_id=${key.key}`;
  axios.get(ep)
  .then((data) => {
    res.send(data.data);
  })
  .catch(err => {
    console.log('get photo err', err);
    res.sendStatus(500);
  })
}

module.exports = getPhotos;