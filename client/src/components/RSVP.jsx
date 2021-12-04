import React, { useState, useEffect } from 'react';
import Person from './Person.jsx';
import axios from 'axios';

const RSVP = (props) => {

  const [input, setInput] = useState({
    name: '',
    email: '',
    idea: '',
    date: '',
  })

  const [list, setList] = useState([]);

  const getList = () => {
    axios.get('/rsvp')
      .then(data => setList(data.data))
      .catch(err => console.log('get list err', err));
  };

  useEffect(getList, [list]);

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

  const dateChanger = (e) => {

    setInput({
      ...input,
      date: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/rsvp', input)
      .then(() => console.log('post rsvp ok'))
      .catch((err) => console.log('rsvp err', err));
  }

  return (
    <div className='rsvp-container'>
      <div className='list'>
        <h3>Waiting List</h3>
        {list.map((person, index) => <Person person={person} key={index} />)}
      </div>
      <div className='form'>
        <h3>Got a pro project in mind? Connect with me with the form below</h3>
        <form onSubmit={handleSubmit}>
          <p>Your Name *</p>
          <input className='inputsmall' onChange={nameChanger} type='text' placeholder='John Smith' required />
          <p>Your Email *</p>
          <input className='inputsmall' onChange={emailChanger} type='text' placeholder='John_Smith@gmail.com' required />
          <p>Intended date *</p>
          <input className='inputsmall' type="date" onChange={dateChanger} id="date" name="datea" required />
          <p>Tell me a about your project *</p>
          <input className='inputsmall' onChange={ideaChanger} type='text' placeholder='Your wonderful ideas' required />
          <br></br>
          <button className='btn'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default RSVP;