var express = require('express');
var app = express();
app.use(express.static(__dirname + '/src'));
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});
app.listen(process.env.PORT || 8080, function() {
  console.log('server started');
});
