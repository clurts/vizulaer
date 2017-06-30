/*jslint node es6 */

const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));
const db = mysql.connect();

module.exports = function(app) {

    app.get('/users', function (req, res, next) {
        //res.send(req.params);
        db.execute('SELECT id, username, email FROM users', function(err, rows, fields) {
            if(err) {
                console.error(err.message);
                res.send(404);
                return;
            }
            res.send(200, rows);
        });
    });

    app.post('/users', function (req, res, next) {
        res.send(201, req.params);
    });

    app.get('/users/:username', function (req, res, next) {
        res.send(200, req.params);
    });

    app.put('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.patch('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.del('/users/:username', function (req, res, next) {
        res.send(405);
    });
};