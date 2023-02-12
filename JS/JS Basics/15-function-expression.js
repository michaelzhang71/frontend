/* function as first class citizen
 * functin expression
 * function as value
 * function expression preferred (not hoist effect)
 *
 * as value:
 * - asssigned to variable (function expression)
 * - pass as arguments (parameter)
 * - returned value (return)
 * - stored as data (method and array item)
 */

const searchBook = function abc(id) {
  console.log(id);
};

console.log(searchBook.length); // 1
console.log(searchBook.name); // 'abc'
searchBook(123);
//abc(123); // error: not defined

const getBook = function (id) {
  console.log(id);
};

console.log(getBook.length); // 1
console.log(getBook.name); // 'abc'
getBook(123);

// pass around
const foo = function () {};
const bar = foo;
console.log("foo.name: ", foo.name);
console.log("bar.name: ", bar.name);

// callback/parameter/higher order function
function hof(fn) {
  console.log("hof:");
  fn();
}

const cb = function () {
  console.log("callback function executed");
};

hof(cb);
