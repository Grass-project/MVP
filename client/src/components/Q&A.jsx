import React, {useState} from 'react';
import Question from './Question.jsx';

const QA = (props) => {

  const questions = [
    {
      question: 'How many photos do you take per session?',
      answers: 'I will take as many as I can but only 16 of them will be edited. Please carefully select those 16 photos.'
    },

    {
      question: 'Do you offer a ride?',
      answers: 'Yes, if you are reside in the Bay Area.'
    },
  ]

  const [qa, setQa] = useState(questions);

  return (
    <div className='question'>
      <p className='reminder'>Please contact xc@gmail.com for additional questions.</p>
      {/* <p className='reminder'>reminder: lease click on the question to show the answer</p> */}
      {qa.map((q, index) => <Question question={q} key={index} />)}
    </div>
  )
}

export default QA;