/*
 * Pure function
 * Definition: a pure function is a function that take in the same input and always
 * return the same out without any side effect
 *
 * side effect: other than return value, also does something else like change outside
 * variable, I/O operation tiggered etc
 *
 * Summary:
 * repeatable when same input with same output
 * no outside influence as input or factor
 * no outside impact as output
 *
 * features:
 * - no dependency with outside input
 * - no variation with output
 *
 * React/Vue: one-way data flow and props should not be changed in component!
 *  */

const names = ["a", "b", "c", "d", "e", "f"];
// pure function like names.slice(1)
function sum(n1, n2) {
  return n1 + n2;
}

// side effect like names.splice(1,2)
let count = 0;
function foo(name, age) {
  console.log("name", name);
  console.log("age", age);
  count++;
}
