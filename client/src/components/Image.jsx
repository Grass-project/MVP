import React, {useState} from 'react';
import ImageModal from './imageModal.jsx';

const Image = (props) => {

  const [modal, setModal] = useState (false);

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div>
    <img onClick={openModal} className='pic' src={props.img.small}/>
    {modal && <ImageModal img={props.img.full} close={closeModal} />}
    </div>
  )
}

export default Image;