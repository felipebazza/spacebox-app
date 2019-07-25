import React from 'react';

const Person = (props) => (
  <div>
    <a
      className="person__card"
      href="#"
      onClick={(e) => {
        props.handleSelectedPerson({
          foto: props.foto,
          nome: props.nome,
          cargo: props.cargo,
          idade: props.idade
        })
      }}
    >
      <div>
        <img
          src={`/images/${props.foto}`}
          alt={props.nome}
          className="person__image"
        />
        <p><span>{props.nome}</span></p>
        <p>{props.cargo}</p>
      </div>
    </a>

  </div>
);

export default Person;