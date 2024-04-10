import { useState } from "react";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");


  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const auth = () =>{

  }

  const addNewName = (e) => {
    e.preventDefault()
    

    const newPerson = {
      id:persons.length + 1,
      name:newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    
    const auth = persons.filter(person => person.name === newName) ? alert('a') : alert('b')
    

  }
  
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNewName}>
          <div>
            name: <input value={newName} onChange={handleNewName} />
          </div>
          <div>
         
            <button type='submit' >add</button>
          </div>
        </form>
        <h2>Numbers</h2>
      {persons.map((person)=>(
        <li key={person.id}>{person.name}</li>
      ))}

      </div>
    </>
  );
}

export default App;
