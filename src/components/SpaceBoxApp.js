import React from 'react';
import Header from './Header';
import Persons from './Persons';
import SelectedPerson from './SelectedPerson';
import personsJson from '../json/dados.json';

export default class SpaceboxApp extends React.Component {
  state = {
    persons: personsJson,
    selectedPerson: []
  };
  handleSelectedPerson = (selectedPerson) => {
    this.setState(() => ({ selectedPerson }));
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
