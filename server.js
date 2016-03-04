var options = require('./src/js/options');
var pizzas = options.pizzas;
var cheeses = options.cheeses;
var toppings = options.toppings;

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/src'));

app.get('/pizzas.json', function(request, response) {
    response.status(200).json(pizzas);
});

app.get('/cheeses.json', function(request, response) {
    response.status(200).json(cheeses);
});

app.get('/toppings.json', function(request, response) {
    response.status(200).json(toppings);
});

app.get('/*', function(request, response) {
  response.status(200).sendFile(__dirname + '/src/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('server started');
});
