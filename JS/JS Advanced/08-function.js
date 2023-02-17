/*
 * Function
 *
 * function is also object hence:
 * function.title = 'hello'
 *  */

function foo(name, age) {}

// add new properties
foo.index = 123;

// built-in properties
// 1. name
console.log("foo.name: ", foo.name);

// 2. length: number of parameters
// attention: 1. ...args; 2. default parameter (and after ...) are not counted in length!!!
console.log("foo.length: ", foo.length);

function bar(...args) {}

console.log("bar.length", bar.length);

function baz(m, n = 11, x, y) {}

console.log("baz.length", baz.length);

// use case of function name
const fns = [foo, bar, baz];

for (const fn of fns) {
  console.log("fn.name", fn.name);
}
