'use strict';

const obj = {
    foo (num1, num2) {
        return num1 + num2;
    },
    bar : 0,
    baz : 1
};

const args = [ 1000, 2000 ];

Reflect.apply(obj.foo, obj, args);
