'use strict';

function* foo () {
    yield 5;
    return 10;
}

function bar () {
    return 10;
}

foo();
bar();
