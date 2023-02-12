/*
 * Function in JS - DRY principle and encapsulation of funcationality
 * function: a set of instructions packaged in one entity
 * The tools in JS to do some work
 * 1. declare a function: functionality packaging
 * 2. call/invoke the function: use the funcationality
 *  -- code at demand
 * 3. function is also a kind of callable object
 */

//  1. funcation declaration
//  - name follows variable rules
//  - typically use verb to show the funcatinality

function createPerson(arg) {
  console.log(arg);
  // code block content ...
}

function getTotalPrice(product) {
  // code logic
  return "total sum price of product";
}

// 2. call a funcation anytime anywher as needed
createPerson("bar");
getTotalPrice({});

// number separator usage

let totalClick = 1_000_000;
console.log("totalClick", totalClick);

// arguments in function

function foo() {
  console.log(typeof arguments);
  console.log("argeuments:", arguments);
  console.log("0:", arguments[0]);
  console.log("arguments length: ", arguments.length);
  console.log("type: ", typeof arguments);
  let args = Array.prototype.slice.call(arguments);
  console.log("args: ", args);
  console.log("args type: ", typeof args);
  let argsArray = [...arguments];
  console.log("argsArray", argsArray);
}
foo("joyce", "jessica", "emma", "lucy");

function bar(...args) {
  console.log("args:", args);
}
bar(1, 2, 3, 4, 5);

// object nature

function showMe() {
  var foo = 123;
  console.log(foo);
}

console.dir(showMe);

// trick: add property to function to carry some information
showMe.index = 0;
//later use index property
