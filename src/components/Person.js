import React from 'react';

const Person = (props) => (
  <div className="person__card">
    <a
      className="person__link"
      href="#"
      onClick={(e) => {
        props.handleSelectedPerson({
          foto: props.foto,
          nome: props.nome,
          cargo: props.cargo,
          idade: props.idade
        }, e)
      }}
    >
      <div>
        <img
          src={`/images/${props.foto}`}
          alt={props.nome}
          className="person__image"
        />
        <p><span className="person__name">{props.nome}</span></p>
        <span>{props.cargo}</span>
      </div>
    </a>

  </div>
);

export default Person;