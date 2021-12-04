import React from 'react';


const About = (props) => {

  return (
    <div className='about'>
      <h2 className='about-title'>Who am I</h2>
      <p className='p'>Photographer & Filmmaker. Lover of coffee and good stories. Currently residing in California, USA</p>
      <h2 className='about-title'>Recent Works</h2>
      <div className='profile'>
      <img className='left' src='img/profile1.jpeg'/>
      <img className='right' src='img/profile2.jpeg'/>
      </div>
    </div>
  )
}

export default About;