import React from 'react';

const Image = (props) => {

  return (
    <img className='pic' src={props.img.small}/>
  )
}

export default Image;