'use strict';

const baz = function () {
    return true;
};

const foo = baz() ? 1 : 2;

let bar;

if (foo) {
    bar = true;
} else {
    bar = false;
}

bar;
