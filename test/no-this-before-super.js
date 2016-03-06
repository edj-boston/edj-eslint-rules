'use strict';

class A {
    constructor () {
        this.a = 0; // OK, this class doesn't have an `extends` clause.
    }
}

class B extends A {
    constructor () {
        super();
        this.a = 0; // OK, this is after `super()`.
    }
}

const b = new B();
b;
