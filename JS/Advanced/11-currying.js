/*
 * Currying
 * fn(a)(b)(c) --> fn(a)(b)(c)
 *
 *
 *  */

// normal function
function foo(x, y, z) {
  return x + y + z;
}

// currying function

function foo(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const curryFoo = (x) => (y) => (z) => x + y + z;
