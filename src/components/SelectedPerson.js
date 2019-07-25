import React from 'react';

const SelectedPerson = (props) => (
  <div className="person">
    {
      props.person.length === 0
        ?
        <p className="widget__message">
          Por favor, selecione uma pessoa para começar.
        </p>
        :
        <div>
          <img
            src={`/images/${props.person.foto}`}
            alt={props.person.nome}
            className="person__image"
          />
          <p>NOME: <span>{props.person.nome}</span></p>
          <p>CARGO: <span>{props.person.cargo}</span></p>
          <p>IDADE: <span>{props.person.idade}</span></p>
        </div>
    }
  </div>

);

export default SelectedPerson;