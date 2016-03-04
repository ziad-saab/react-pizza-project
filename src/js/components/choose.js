import React from 'react';
import { browserHistory, Link } from 'react-router';
import appState from '../appState.js';

var pizzas = [
  {
    name: 'Cheese Pizza',
    cheese: 'mozzarella',
    toppings: [],
    price: 5
  },
  {
    name: 'The Monster',
    cheese: 'parmesan',
    toppings: ['anchovies', 'lobster', 'truffle oil'],
    price: 100
  }
];

var Choose = React.createClass({

  handleChoice(pizza, event) {
    event.preventDefault();
    appState.setPizza(pizza);

    browserHistory.push('/done');
  },

  render() {
    var pizzaList = pizzas.map( (pizza, index) => {
      return (
        <li key={index}>
          <a href onClick={this.handleChoice.bind(this, pizza)}>
            {pizza.name} (${pizza.price})
          </a>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {pizzaList}
          <li> <Link to="/custom"> Custom pizza </Link> </li>
        </ul>
      </div>
    )
  }
})

module.exports = Choose;
