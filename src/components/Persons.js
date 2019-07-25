import React from 'react';
import Person from './Person';

const Persons = (props) => (
  <div className="person__container">
    {
      props.persons.map((person, index) => (
        <Person
          key={person.id}
          foto={person.foto}
          nome={person.nome}
          cargo={person.cargo}
          idade={person.idade}
          count={index + 1}
          handleSelectedPerson={props.handleSelectedPerson}
        />
      ))
    }
  </div>
);

export default Persons;