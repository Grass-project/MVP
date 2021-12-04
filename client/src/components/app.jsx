import React, {useState} from 'react';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import RSVP from './RSVP.jsx';
import QA from './Q&A.jsx';

const App = (props) => {

  const [view, setView] = useState('Gallery');

  const viewChanger = (input) => {

     setView(input);
  }

  return (
    <div className='frame'>
      <div className='toolbar'>
        <span onClick={() => viewChanger('Gallery')} className='toolbar-btn'>Gallery </span>
        <span onClick={() => viewChanger('About')} className='toolbar-btn'>About </span>
        <span onClick={() => viewChanger('RSVP')} className='toolbar-btn'>RSVP </span>
        <span onClick={() => viewChanger('Q&A')} className='toolbar-btn'>Q&A </span>
      </div>
      <img className='logo' src='img/logo.png' />
      {view === 'Gallery' && <div className='container'><Gallery /></div>}
      {view === 'About' && <About />}
      {view === 'RSVP' && <RSVP />}
      {view === 'Q&A' && <QA />}
    </div>
  );
}

export default App;