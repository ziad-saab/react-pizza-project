import React from 'react';
import { browserHistory } from 'react-router';
import appState from '../appState';

var Order = React.createClass({

  handleSubmit(event) {
    event.preventDefault();

    appState.setCustomer({
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      addLine1: this.refs.addLine1.value,
      addLine2: this.refs.addLine2.value,
      city: this.refs.city.value,
      province: this.refs.province.value
    });

    browserHistory.push('/choose');
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="firstName" type="text" placeholder="First name"/><br/>
          <input ref="lastName" type="text" placeholder="Last name"/><br/>
          <input ref="email" type="text" placeholder="Email address"/> <br/>
          <input ref="addLine1" type="text" placeholder="Address line 1"/><br/>
          <input ref="addLine2" type="text" placeholder="Address line 2"/><br/>
          <input ref="city" type="text" placeholder="City"/><br/>
          <input ref="province" type="text" placeholder="Province"/><br/>
          <button ref="next" type="submit">Next...</button>
        </form>
      </div>
    )
  }
})

module.exports = Order;
