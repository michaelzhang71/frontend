/*
 * Curry Function generator --> curryFn
 * - pass in the orginal function
 * - return a curriedFn
 *
 *  */

// 1. original function

function foo(x, y, z) {
  return x + y + z;
}

// 2. curryFn
function curryFn(fn) {
  function curryFnGenerator(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curryFnGenerator(...args.concat(newArgs));
      };
    }
  }
  return curryFnGenerator;
}

const fooCurry = curryFn(foo);
const res = fooCurry(10)(20)(30);
console.log("res", res);
