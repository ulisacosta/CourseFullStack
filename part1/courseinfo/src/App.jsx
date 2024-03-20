import Content from "../components/content/Content"
import Header from "../components/header/Header"
import Total from "../components/total/Total"
import {exercises1} from "../components/content/parts/Part1"
import {exercises2} from "../components/content/parts/Part2"
import {exercises3} from "../components/content/parts/Part3"

const App = () => {
  const course = 'Half Stack application development'



  return (
    <div>
      <Header course={course}></Header>
      <Content></Content>
      
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
      
    </div>
  )
}

export default App