import React from 'react';
import { browserHistory, Link } from 'react-router';
import CheckboxGroup from 'react-checkbox-group';
import appState from '../appState.js';

var Custom = React.createClass({
  getInitialState() {
    return {
      name: "Custom pizza",
      cheese: {
        price: 0
      },
      toppings: []
    }
  },

  render() {
    var cheeseList = cheeses.map( (cheese, index) => {
      return (
        <label>
          <input
            type="radio"
            name="cheeses"
            key={index}
            onChange={this.handleCheese.bind(this, cheese)}
          />
          {cheese.displayName} (${cheese.price})
          <br/>
        </label>
      )
    });

    var toppingList = toppings.map( (topping, index) => {
      return (
        <label>
          <input type="checkbox" key={index} value={topping}/>
          {topping.displayName} (${topping.price})
          <br/>
        </label>
      )
    });

    var checkboxes = (
      <CheckboxGroup
      name="toppings"
      ref="toppings"
      onChange={this.handleToppings}>
        {toppingList}
      </CheckboxGroup>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name your pizza!"
            onChange={this.handleName}
          /> <br/>
          {cheeseList} <br/>
          {checkboxes}
          <button type="submit"> Next... </button>
          <p> Total: ${this.getPrice()} </p>
        </form>
      </div>
    )
  },

  getPrice() {
    var price = 10 + this.state.cheese.price;
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
  handleToppings() {
    var checkedToppings = this.refs.toppings.getCheckedValues();
    this.setState({
      toppings: checkedToppings
    })
  },
  handleSubmit(event) {
    event.preventDefault();

    appState.setPizza({
      name: this.state.name,
      cheese: this.state.cheese.name,
      toppings: this.state.toppings.map( topping => topping.name),
      price: this.getPrice()
    })

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
