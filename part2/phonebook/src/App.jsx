import { useState } from "react";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");



  const handleNewName = (event) => {
   /*  console.log(event.target.value) */
    setNewName(event.target.value)
  }

  const handleNewNumber = (e) =>{
setNewNumber(e.target.value)
  }

  const handleFilter = (e) =>{
    setFilter(e.target.value)

  }
  
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addNewName = (e) => {
    e.preventDefault()
   
    const newPerson = {
      id:persons.length + 1,
      name:newName,
      number:newNumber,

    }

    const auth = persons.filter((person) => person.name == newName);
    const auth2 = auth.length > 0 ? alert(`${auth.map(auths => (auths.name))} is already added to phonebook`) : setPersons(persons.concat(newPerson))
    
    setNewName('')  
    setNewNumber('')  

  }
  
  return (
    <>
      <div>
        <h2>Phonebook</h2>

        
        <div> filter shown with <input value={filter} onChange={handleFilter}/> </div>
        <div>

       
      
     
        </div>

       
      
        <form onSubmit={addNewName}>
          <div>
            name: <input value={newName} onChange={handleNewName} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNewNumber} />
          </div>
          <div>
         
            <button type='submit' >add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        
        {filteredPersons.map(person => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}

      </div>
    </>
  );
}

export default App;
