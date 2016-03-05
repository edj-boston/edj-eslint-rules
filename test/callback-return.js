'use strict';

const foo = function (err, callback) {
    if (err) {
        return callback(err);
    }
    callback(err);
};

foo();
