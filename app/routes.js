// Require express.
var express = require('express');
var path    = require('path'); // helper from node that helps create paths.

// Create router object.
var router = express.Router(); // Built in express router.

// Export router for use in server.js.
module.exports = router;

// Route for homepage.
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/pages/index.html'));
});

// Route for about page.
router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/pages/about.html'));
});

// Route the contact page.
router.get('/d3testing', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/pages/d3testing.html'));
});
