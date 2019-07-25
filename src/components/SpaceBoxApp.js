import React from 'react';
import Header from './Header';
import Persons from './Persons';
import SelectedPerson from './SelectedPerson';
import personsJson from '../json/dados.json';


export default class SpaceboxApp extends React.Component {
  state = {
    persons: personsJson,
    selectedOption: undefined,
    selectedPerson: []
  };
  handleSelectedPerson = (personSelected) => {
    this.setState(() => ({ selectedPerson: personSelected }));
    console.log(this.state.selectedPerson);
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="widget">
            <SelectedPerson
              person={this.state.selectedPerson}
            />
            <Persons
              persons={this.state.persons}
              handleSelectedPerson={this.handleSelectedPerson}
            />
          </div>
        </div>
      </div>
    );
  }
}
