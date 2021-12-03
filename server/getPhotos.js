const axios = require('axios');
const key = require('../config.js');

const getPhotos = (req, res) => {

  const options = {
    method: 'get',
    url: 'https://api.unsplash.com/photos?per_page=30',
    headers: {
      'Authorization': `Client-ID ${key.key}`,
    }
  };

  axios(options)
  .then((data) => {

    res.send(data.data);
  })
  .catch(err => {
    console.log('get photo err', err);
    res.sendStatus(500);
  })
}

module.exports = getPhotos;