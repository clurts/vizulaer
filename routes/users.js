/*jslint node es6 */

module.exports = function(app) {

    app.get('/users', function (req, res, next) {
        //res.send(req.params);
        res.send([
            {
                "name": {
                    "username": "clu",
                    "givenname": "Carsten",
                    "sirname": "Lund"
                }
            },{
                "name": {
                    "username": "vm",
                    "givenname": "'Viggo",
                    "sirname": "Mortensen"
                }
            }
        ]);
    });

    app.post('/users', function (req, res, next) {
        res.send(201, req.params);
    });

    app.get('/users:username', function (req, res, next) {
        res.send(200, req.params);
    });

    app.put('/users:username', function (req, res, next) {
        res.send(405);
    });

    app.patch('/users:username', function (req, res, next) {
        res.send(405);
    });

    app.del('/users:username', function (req, res, next) {
        res.send(405);
    });

};