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

module.exports = {pizzas, cheeses, toppings};
