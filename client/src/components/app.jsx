import React, {useState} from 'react';
import Gallery from './Gallery.jsx';

const App = (props) => {

  const [data, setData] = useState('');

  return (
    <div className='frame'>
      <h2 className='title'>blog title</h2>
      <div className='toolbar'>
        <span className='toolbar-btn'>Gallery </span>
        <span className='toolbar-btn'>Albums </span>
        <span className='toolbar-btn'>RSVP </span>
      </div>
      <div className='container'><Gallery /></div>
    </div>
  );
}

export default App;