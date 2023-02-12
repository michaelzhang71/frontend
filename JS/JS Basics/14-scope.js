/* Scope: access to variable
 * global scope
 * local scope
 * external scope
 * scope chain sequence:
 * local scope --> parent scope --> ... --> global scope --> window
 *  */
var message = "scope in global";

function foo() {
  var message = "scope in foo";
  console.log("message", message);

  function bar() {
    var message = "scope in bar";
    console.log("message", message);
  }
  bar();
}

console.log("message", message);
foo();
