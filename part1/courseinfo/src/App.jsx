import Content from "../components/content/Content"
import Header from "../components/header/Header"
import Total from "../components/total/Total"
/* import {exercises1} from "../components/content/parts/Part1"
import {exercises2} from "../components/content/parts/Part2"
import {exercises3} from "../components/content/parts/Part3"
 */
/* import {parts} from "../components/content/parts/objParts" */
import {course} from "../components/content/parts/objParts"

const App = () => {

  return (
    <div>
      <Header course={course.name}></Header>
      <Content></Content>
      
      <Total></Total>
      
    </div>
  )
}

export default App