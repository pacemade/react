import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var person = {
  personName: "Bushy",
  personAge: 24,
  favorites: [
    "dogs",
    "dawgs",
    "doggs"
  ]
}

ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    animals={person.favorites}
  />,
  document.getElementById('root')
)
