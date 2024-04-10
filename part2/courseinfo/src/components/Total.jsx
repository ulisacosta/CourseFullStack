import React from 'react'

export default function Total({parts}) {
  let initialValue = 0;

  const reduce = parts.reduce( (accumulator,currentValue) => {
/*       console.log(accumulator.exercises, currentValue.exercises) */
    return accumulator + currentValue.exercises
    
},0);




function sum(){
    
    for(let i=0; i < parts.length ; i++){
        initialValue = parts[i].exercises + initialValue 
        
/*         console.log(initialValue) */
    }

} 
sum()

    return (
    <>

        <div>Total {reduce} </div>
    

    </>

  )
}
