import React from 'react';

const ImageModal = (props) => {

  return (


      <div className='modal-bg'>
        <div className='modal-container'>
        <p onClick={props.close} className='close'>X</p>
          <img src={props.img} />
        </div>
      </div>

  )
}

export default ImageModal;