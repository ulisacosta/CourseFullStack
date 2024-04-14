import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={props.addNewName}>
          <div>
            name: <input value={props.newName} onChange={props.handleNewName} />
          </div>
          <div>
            number: <input value={props.newNumber} onChange={props.handleNewNumber} />
          </div>
          <div>
         
            <button type='submit' >add</button>
          </div>
        </form>
  )
}
