import React, {useState} from 'react';

const RSVP = (props) => {

  const [input, setInput] = useState ({
    name: '',
    email: '',
    idea: '',
  })

  const nameChanger = (e) => {
    setInput({
      ...input,
      name: e.target.value
    })
  }

  const emailChanger = (e) => {
    setInput({
      ...input,
      email: e.target.value
    })
  }

  const ideaChanger = (e) => {
    setInput({
      ...input,
      idea: e.target.value
    })
  }

  return (
    <div className='rsvp'>
      <h3>Got a pro project in mind? Connect with me with the form below</h3>
      <form>
        <p>Your Name *</p>
        <input className='inputsmall' onChange={nameChanger} type='text' placeholder='John Smith'/>
        <p>Your Email *</p>
        <input className='inputsmall' onChange={emailChanger} type='text' placeholder='John_Smith@gmail.com'/>
        <p>Tell me a about your project *</p>
        <input className='inputlarge' onChange={ideaChanger} type='text' placeholder='Your wonderful ideas'/>
        <br></br>
        <button>submit</button>
      </form>
    </div>
  )
}

export default RSVP;