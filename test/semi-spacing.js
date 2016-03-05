'use strict';

const foo = 0;
foo;

for (let i = 0; i < 10; i++) {
    const bar = 1;
    bar;
}

throw new Error('error');
