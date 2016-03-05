'use strict';

function foo (err, callback) {
    if (err) throw err;
    callback();
}

foo();
