import React from 'react'
import personsService from '../../services/req'


export default function BtnDelete(props) {
    

   function btnDelete() {
    if(window.confirm("Seguro que quiere eliminar el contacto?")){

        personsService.deletePerson(props.id)
        .then(() => {

          props.updatePersons();
        })

    }
      
    }




  return (
    <button onClick={btnDelete}>Delete</button>
  )
}
