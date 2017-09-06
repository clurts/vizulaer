const path = require('path');

module.exports = function (app, passport) {
    require(path.join(__dirname, 'articles'))(app, passport);    
    require(path.join(__dirname, 'users'))(app);

}