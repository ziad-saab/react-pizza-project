var appState = {
  customer: {},
  pizza: {},

  get() {
    return {
      customer: this.customer,
      pizza: this.pizza
    };
  },

  setCustomer(data) {
    Object.assign(this.customer, data);
  },

  setPizza(data) {
    Object.assign(this.pizza, data);
  }
}
// for debugging ////////////////////////////
// window.appState = appState; //for debugging//
// for debugging ////////////////////////////
module.exports = appState;
