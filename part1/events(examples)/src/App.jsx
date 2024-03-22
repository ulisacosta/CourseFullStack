import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from '../components/Button'
function App() {
  const [counter, setCounter] = useState(0)

const plus = () =>{
    return(
      setCounter(counter+1)
    )
  }
 
  const minus = () =>{
    return(
      setCounter(counter-1)
    )
  }
 
  const zero = () =>{
    return(
      setCounter(0)
    )
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <>
    <p>{counter}</p>
     <Button onClick={plus} text='plus'/>
     <Button onClick={minus} text='minus'/> 
     <Button onClick={zero} text='zero'/> 


     <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
    </>
  )
}

export default App
