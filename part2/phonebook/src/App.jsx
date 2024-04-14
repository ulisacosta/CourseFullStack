import { useState } from "react";

import "./App.css";
import Filter from "./components/filter/Filter";
import Form from "./components/form/Form";
import Persons from "./components/persons/Persons";

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
      <Filter filter={filter} handleFilter={handleFilter}></Filter>
        </div>

        <h3>Add a new</h3>
        <Form addNewName={addNewName} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}></Form>
        <h2>Numbers</h2>
        
    <Persons filteredPersons={filteredPersons}></Persons>

      </>
    

  )
}

export default App;
