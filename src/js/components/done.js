import React from 'react';
import { browserHistory, Link } from 'react-router';
import fetch from 'isomorphic-fetch';
import appState from '../appState';

var Done = React.createClass({

  render() {
    var orderState = appState.get();
    var customer = orderState.customer;
    var pizza = orderState.pizza;

    var customerHtml = Object.keys(customer).map( (key, i) => {
      return (
        <p key={i}> {key}: {customer[key]} </p>
      )
    });

    var pizzaHtml = Object.keys(pizza).map( (key, i) => {
      return (
        <p key={i}> {key}: {pizza[key]} </p>
      )
    });

    return(
      <div>
        <h2>Order confirmation:</h2>
        <p><strong>Customer details:</strong></p>
        {customerHtml}
        <br/>
        <p><strong>Chosen pizza:</strong></p>
        {pizzaHtml}<br/>
        <button type='button' onClick={this.handleOrder}> Order now! </button>
      </div>
    );
  },

  handleOrder() {
    fetch();
  }
});

module.exports = Done;
