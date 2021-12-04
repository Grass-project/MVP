import React, {useState} from 'react';

const Question = (props) => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
    <p onClick={handleClick} className='q'>Q: {props.question.question}</p>
    {show && <p>A: {props.question.answers}</p>}
    </div>
  )
}

export default Question;