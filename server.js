var express = require('express');
var app = express();

/*
this says: serve all the files in the src directory if they match the URL

For example, if the client requests http://server/css/app.css then the file in src/css/app.css will be served
But if the client requests http://server/step-2 then since there is no file by that name the middleware will call next()
*/
app.use(express.static(__dirname + '/src'));

/* insert any app.get or app.post you need here. only if you do the advanced part */

/*
This says: for any path NOT served by the middleware above, send the file called index.html instead.
For example, if the client requests http://server/step-2 the server will send the file index.html. Then on the browser, React Router will load the appropriate component
*/
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});
app.listen(process.env.PORT || 8080, function() {
  console.log('server started');
});
