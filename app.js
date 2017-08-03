/*jslint node es6 */

const restify = require('restify');
const logger = require('morgan');
const path = require('path');
const passport = require('passport-restify');
const port = process.env.PORT || 8080;
const app = restify.createServer({
    name: 'RESTful API Demo',
    version: '0.0.1'
});

app.use(logger('dev'));
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());



require(path.join(__dirname, 'routes', 'index'))(app); // den skal være her --- bruger logger

app.listen(port, function () {
    console.log('%s is listening on port %s', app.name, port);
});