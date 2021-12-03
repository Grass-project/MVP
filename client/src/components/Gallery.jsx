import React, {useState, useEffect} from 'react';
import Image from './Image.jsx';
import axios from 'axios';

const Gallery = (props) => {

  const [images, setImg] = useState ([]);

  const getData = () => {
    axios.get('/photos')
    .then(data => {
      let gallery = [];

      for (let img of data.data) {
        let obj = {};
        obj.full = img.urls.full;
        obj.small = img.urls.small;
        // obj.description = img.alt_description;
        gallery.push(obj);
      }
      setImg(gallery);
    })
    .catch(err => {
      console.log('get data err', err);
    });
  }

  useEffect(getData, []);

  return (
    <div>
      <span className='image'>{images.map((img, index) => <Image img={img} key={index} />)}</span>
    </div>
  );
}

export default Gallery;