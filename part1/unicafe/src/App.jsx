import { useState } from 'react'
import Statistics from '../components/statistics/Statistics'
import Button from '../components/button/Button'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function onGood () {
    console.log('good')
    setGood(good + 1)

  }
  
  function onNeutral () {
    console.log('neutral')
    setNeutral(neutral + 1)

  }
  
  function onBad () {
    console.log('bad')
    setBad(bad + 1)

  }

  const allFeedback = good + neutral + bad;
  const average = (good - bad) / allFeedback;
  const positive = (good / allFeedback) * 100;


    return (
    <>
      <p>Give feedback</p>

      <Button click={onGood} text='good'></Button>
      <Button click={onNeutral} text='neutral'></Button>
      <Button click={onBad} text='bad'></Button>
  
  
  <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive} allFeedback={allFeedback}></Statistics>
 
 
 


 
    </>
  )
}

export default App
