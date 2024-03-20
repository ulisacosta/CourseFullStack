
/* import { parts } from '../content/parts/objParts' */
import { course } from '../content/parts/objParts'

export default function Total() {
  return (
  <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
   
    )
}
