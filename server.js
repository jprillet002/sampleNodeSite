////////////////// USING EXPRESS ////////////////////
// Require our dependencies.
'use strict';

var express         = require('express');
var app             = express();
var port            = 8080;

// Routing the app. Routing should not be kept in the server file, but in their own routes.js file.
var router = require('./app/routes'); // Tells server where to find routes.
app.use('/', router); // Use routes file to load any path.

// Set static files (css, images, etc) location.
app.use(express.static(__dirname + '/public'));

// Start the server.
app.listen(port, function() {
    console.log('Successful launch. Listening on port ' + port);
});