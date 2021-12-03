import React, {useState} from 'react';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import RSVP from './RSVP.jsx';

const App = (props) => {

  const [view, setView] = useState('Gallery');

  const viewChanger = (input) => {

     setView(input);
  }

  return (
    <div className='frame'>
      <h2 className='title'>blog title</h2>
      <div className='toolbar'>
        <span onClick={() => viewChanger('Gallery')} className='toolbar-btn'>Gallery </span>
        <span onClick={() => viewChanger('About')} className='toolbar-btn'>About </span>
        <span onClick={() => viewChanger('RSVP')} className='toolbar-btn'>RSVP </span>
        <span onClick={() => viewChanger('Q & A')} className='toolbar-btn'>Q & A </span>
      </div>
      {view === 'Gallery' && <div className='container'><Gallery /></div>}
      {view === 'About' && <div className='container'><About /></div>}
      {view === 'RSVP' && <div className='container'><RSVP /></div>}
    </div>
  );
}

export default App;