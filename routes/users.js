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

    app.get('/users/:username', function (req, res, next) {
        
        let user = new User();
        user.getOne(req.params.username, function (err, result) {
            if (err) {
                console.error(err.message);
                return;
            }
            res.send(200, result);
        });
    });

    app.post('/users', function (req, res, next) {
        let user = new User();
        user.create(req.params, function (err, result) {
            if (err) {
                console.error(err.message);
                if (err.message.startsWith('Duplicate')) {
                    res.send(409);
                } else {
                    res.send(400); 
                }
                return;
            }
            req.params.id = result.insertId;
            res.send(201, result);
        });
    });

    app.put('/users/:username', function (req, res, next) {
        console.log(req.params);
        let user = new User();
        user.update(req.params, function (err, result) {
            if (err) {
                res.send(405); 
                return;
            }
            req.params.id = result.insertId;
            res.send(201, result);
        });
    });

    app.patch('/users/:username', function (req, res, next) {
        res.send(405);
    });

    app.del('/users/:id', function (req, res, next) {
        let user = new User();
        user.del(req.params.id, function (err, result) {
            if (err) {
                console.error(err.message);
                return;
            }
            res.send(204);
            return next();
        }); 
    });
};