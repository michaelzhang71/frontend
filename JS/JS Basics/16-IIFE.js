/* IIFE
 * Immediately Invoked Function Expression
 * scope: private
 * (function expression)()
 *
 */

// IIFE format
(function (n) {
  console.log(console.log("IIFE:", n));
})(123);

// module effect with private scope of variables
var personModule = (function (n) {
  var name = "joyce";
  var info = {};
  var greet = function () {};
  return { name, info, greet };
})();
console.log("personModule", personModule);

// example

for (var index = 0; index < 3; index++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(index);
}
