import React from 'react';

const RSVP = (props) => {

  return (
    <div>
      <h3>Got a pro project in mind? Connect with me with the form below</h3>
      <form>
        <p>Your Name *</p>
        <input type='text' placeholder='John Smith'/>
        <p>Your Email *</p>
        <input type='text' placeholder='John_Smith@gmail.com'/>
        <p>Tell me a about your project *</p>
        <input type='text' placeholder='Your wonderful ideas'/>
      </form>
    </div>
  )
}

export default RSVP;