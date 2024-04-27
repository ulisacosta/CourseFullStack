import { useState,useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Filter from "./components/filter/Filter";
import Form from "./components/form/Form";
import Persons from "./components/persons/Persons";
import personsService from "./services/req"

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    /*  console.log(event.target.value) */
    setNewName(event.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  /* Generamos lista de contactos */
  useEffect(() => {
    personsService.getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  /* Cuando hace click en boton para añadir */
  const addNewName = (e) => {
    e.preventDefault();
    
    /* Busca si el contacto ya existe */
      if (persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
        return;
      }

      /* Datos nuevo contacto */
    const newPerson = {
      name: newName,
      number: newNumber,
      
    };

    /* POST para crear contacto */
    personsService.create(newPerson)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName("");
      setNewNumber("");
    })

/*     axios
    .post('http://localhost:3001/persons', newPerson)
    .then(response => {
      console.log(response)
      setPersons(persons.concat(response.data))
    
    }) */


   
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

    
  

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Filter
          filter={filter}
          handleFilter={handleFilter}
        ></Filter>
      </div>

      <h3>Add a new</h3>
      <Form
        addNewName={addNewName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      ></Form>
      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons}></Persons>
    </>
  );
}

export default App;
