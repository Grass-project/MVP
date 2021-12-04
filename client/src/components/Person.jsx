import React, {useState} from 'react';
import axios from 'axios';

const Person = (props) => {

  const [option, setOption] = useState (false);

  const handleClick = () => {

    setOption(!option);

    const id = props.person['_id'];
  }

  const remove = (id) => {
    axios.delete('/rsvp', {params: {id: id}})
    .then(() => {
      console.log('removed')
      setOption(false);
    })
    .catch(err => console.log('not removed', err));
  }

  return (
    <div>
    <p onClick={handleClick} >{props.person.name}</p>
    {option && <div className='update-c'><span className='update'>update</span> <span onClick={() => remove(props.person['_id'])} className='update'>remove</span></div>}
    </div>
  )
}

export default Person;