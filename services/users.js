/*jslint node es6 */

const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'mysql'));
const db = mysql.connect();

class User {
    getAll(next){
        db.execute('SELECT id, username, email, password FROM users', function (err, rows) {
            if (err) {
                return next(err);
            }
            next(null,rows);
        });
    }
    getOne(username, next) {
        db.execute('SELECT id, fullname, email, username,password FROM users WHERE username = ?', [username], function (err, rows) {
            if (err) {
                return next(err);
            }
            console.log(rows);
            next(null, rows);
        });
    }
    create(values, next) {
        db.execute('INSERT INTO users SET fullname = ?, email = ?, username = ?, password = ?',
                    [values.fullname, values.email, values.username, values.password], function(err, row) {
            if (err) {
                return next(err);
            }
            next(null, row);
        });
    }
    update(values, next) {
        db.execute('UPDATE users SET fullname = ?, email = ?, username = ?, password = ? WHERE username = ?', 
                  [values.fullname, values.email, values.username, values.password], function(err, row) {
            if (err) return next(err);
            next(null, row);
        });
    }
    del(values, next) {
        db.execute('DELETE FROM users WHERE ID = ?', [values]);
        next();
    }
}
module.exports = User;