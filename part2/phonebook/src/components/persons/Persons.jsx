import React from 'react'

export default function Persons(props) {

  return (
    <>

    {props.filteredPersons.map(person => (
      <li key={person.id}>{person.name} {person.number}</li>
    ))}
    </>
  )
}
