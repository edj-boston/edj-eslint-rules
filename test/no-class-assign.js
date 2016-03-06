'use strict';

class A {
    constructor () {
        this.b();
    }

    b () {
        const B = 0;
        B;
    }
}

const a = new A();
a;
