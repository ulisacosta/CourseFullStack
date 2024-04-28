import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Filter from "./components/filter/Filter";
import Form from "./components/form/Form";
import Persons from "./components/persons/Persons";
import personsService from "./services/req";
import BtnDelete from "./components/btnDelete/BtnDelete";

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
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  /* Cuando hace click en boton para añadir */
  const addNewName = (e) => {
    e.preventDefault();
    /* Datos nuevo contacto */
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    /* Busca si el contacto ya existe */

    const existingContact = persons.find(person => person.name === newName)
    console.log(existingContact)  
    if (existingContact){
      if (
        window.confirm(
          "Ya existe un contacto con ese nombre, quieres actualizar su numero?"
        )
      ) {
        const changedNumber = { ...existingContact, number: newNumber };
        
          personsService
            .updatePerson(changedNumber.id, changedNumber)
            .then((updateNumber) => {
              setPersons(
                persons.map((person) =>
                  person.id !== existingContact.id ? person : updateNumber
                )
              );
                setNewName("");
                setNewNumber("");
            
            });
        };
      
      return;
    }

    /* POST para crear contacto */
    personsService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });

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

  const updatePersons = () => {
    personsService.getAll().then((updatedPersons) => {
      setPersons(updatedPersons);
    });
  };

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
      <Persons
        filteredPersons={filteredPersons}
        updatePersons={updatePersons}
      ></Persons>
    </>
  );
}

export default App;
