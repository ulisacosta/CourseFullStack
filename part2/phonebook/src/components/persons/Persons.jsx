import React from 'react'
import BtnDelete from '../btnDelete/BtnDelete'

export default function Persons(props) {

  return (
    <>

    {props.filteredPersons.map(person => (

      <li key={person.id} >{person.name} {person.number} <BtnDelete id={person.id} updatePersons={props.updatePersons}></BtnDelete></li>
      
   
    ))}
    </>
  )
}
