/*jslint node es6 */

const path = require('path');
const Article = require(path.join(__dirname, '..', 'services', 'articles'));

module.exports = function (app, passport) {
    app.get('/articles', passport.authenticate('basic', {'session': false }), function (req, res) {
        const article = new Article();
        article.get()
        .then((result) => {
            res.send(200, result);
        })
        .catch((err) => {
            res.send(404, { 'code': 'NotFound', 'message': err.message });
        });
    });

    app.get('/articles/:id', passport.authenticate('basic', {'session': false }), function (req, res) {
        const article = new Article(req.params.id);
        article.get()
        .then((result) => {
            res.send(200, result);
        })
        .catch((err) => {
            res.send(404, { 'code': 'NotFound', 'message': err.message });
        });
    });
    
};
