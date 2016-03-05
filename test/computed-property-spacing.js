'use strict';

const a = 'a',
    b   = 'b',
    bar = 'bar',
    foo = 'foo',
    obj = {
        foo : 0
    };

obj[foo];
obj['foo'];
const x = { [b] : a };
obj[foo[bar]];

x;
