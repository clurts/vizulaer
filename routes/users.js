/*jslint node es6 */

const path = require('path');
const User = require(path.join(__dirname, '..', 'services', 'users'));

module.exports = function (app) {

    app.get('/users', function (req, res, next) {
        //res.send(req.params);
        let user = new User();
        user.getAll(function (err, result) {
            if (err) {
                console.error(err.message);
                return;
            }
            res.send(result);
        });
    });

    app.post('/users', function (req, res, next) {
        let user = new User();
        user.create(req.params, function (err, result) {
            if (err) {
                console.error(err.message);
                res.send(400);
                return;
            }
            req.params.id = result.insertId;
            res.send(201, req.params);
        });
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