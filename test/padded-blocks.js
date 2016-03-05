'use strict';

function baz () {
    // ...
    const foo = 0;
    let bar = 1;

    bar = 2;
    foo;
    bar;
}

baz();
