import React from 'react';
import { browserHistory, Link } from 'react-router';
import CheckboxGroup from 'react-checkbox-group';
import appState from '../appState.js';

var Custom = React.createClass({

  getInitialState() {
    return {
      name: "Custom pizza",
      cheese: {},
      toppings: []
    }
  },

  render() {
    var cheeseList = cheeses.map( (cheese, index) => {
      return (
        <label key={index}>
          <input
            type="radio"
            name="cheeses"
            onChange={this.handleCheese.bind(this, cheese)} />
          {cheese.displayName} (${cheese.price})
          <br/>
        </label>
      )
    });

    var toppingsList = toppings.map( (topping, index) => {
      return (
        <label key={index}>
          <input
            type="checkbox"
            onChange={this.handleToppings.bind(this, topping)} />
          {topping.displayName} (${topping.price})
          <br/>
        </label>
      )
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name your pizza!"
            onChange={this.handleName} /> <br/>
          {cheeseList} <br/>
          {toppingsList} <br/>
          <button type="submit"> Next... </button>
          <p> Total: ${this.getPrice()} </p>
        </form>
      </div>
    )
  },

  getPrice() {
    var price = 10 + (this.state.cheese.price || 0);
    this.state.toppings.forEach( topping => {
      price += topping.price;
    });

    return price;
  },

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  },

  handleCheese(cheese, event) {
    if (event.target.checked) {
      this.setState({
        cheese: cheese
      });
    }
  },

  handleToppings(topping, event) {
    if (event.target.checked) {
      var toppings = this.state.toppings;
      toppings.push(topping);

      this.setState({
        toppings: toppings
      })
    }
    else {
      var toppings = this.state.toppings;
      var index = toppings.findIndex( item => {
        return item.name === topping.name;
      })

      if (index >= 0) toppings.splice(index, 1);
      this.setState({
        toppings: toppings
      });
    }
  },

  handleSubmit(event) {
    event.preventDefault();

    var pizza = {
      name: this.state.name,
      cheese: this.state.cheese.name,
      toppings: this.state.toppings.map( topping => topping.name),
      price: this.getPrice()
    };

    appState.setPizza(pizza);

    browserHistory.push('/done');
  },
});



var cheeses = [
  {
    name: 'mozzarella',
    displayName: 'Mozzarella cheese',
    price: 0
  },
  {
    name: 'parmesan',
    displayName: 'Parmigiano Reggiano',
    price: 100
  }
];

var toppings = [
  {
    name: 'pepperoni',
    displayName: 'Pepperoni',
    price: 1
  },
  {
    name: 'anchovies',
    displayName: 'Anchovies',
    price: 10
  },
  {
    name: 'lobster',
    displayName: 'Lobstah',
    price: 25
  },
  {
    name: 'truffle oil',
    displayName: 'Mmmm... truffle oillll',
    price: 100
  }
];

module.exports = Custom;
