/*jslint node es6 */

// DEPENDENCIES

const restify = require('restify');
const path = require('path');
const passport = require('passport');

const port = process.env.PORT || 8080;

const app = restify.createServer({
    name: 'RESTful API Demo',
    version: '0.0.1'
});

// CONFIGURATION
require(path.join(__dirname, 'config', 'passport'))(app, passport)
require(path.join(__dirname, 'config', 'server'))(app, passport)

// ROUTES
require(path.join(__dirname, 'routes', 'index'))(app, passport); // den skal være her --- bruger logger

// LISTEN
app.listen(port, function () {
    console.log('%s is listening on port %s', app.name, port);
});