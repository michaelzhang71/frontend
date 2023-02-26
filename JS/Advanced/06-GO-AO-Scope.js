// how JS engine execute below code?
var title = "Javascript Ninja";
function foo() {
  var title = "CSS Garden";
  console.log(title);
  bar();
}

function bar() {
  console.log(title);
}

var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("result", result);
foo();

/*
 * ----------------------------------------------------------------
 * Step 1: GO initialization (window in browser | global in Node.js)
 * Initilize global object at heap before any code execution
 * - accessible by all scope
 * - contains important objects/functions/properties
 *  + Object
 *  + Math
 *  + Date
 *  + setTimeout/setTimeInterval
 *  + ...
 *  + window
 *  + this ( === window)
 *
 * Also acting as VO  (variable object for glocal execution context)
 *  + title: undefined
 *  + num1: undefined
 *  + num2: undefined
 *  + result: undefined
 *  + foo: 0x100
 *  + bar: 0x200
 * Hoisting: variables and functions registered in VO during parsing
 * function declaration is registered first and could be replaced with other
 * value by variable assignment during code execution
 * ---------------------------------------------------------------------
 * Step 2: Execution Context Stack
 * At beginning, global execution context is pushed to ECS at bottom
 * - variable value assignment
 * - code execution
 *
 * when function call, new function execution context is pushed into ECS
 * AO for the function created:
 * - arguments
 * - parameters
 * - variables
 * - this binding
 * function code executed with AO associated
 * when function finishes, FEC is popped out and AO destroyed
 *
 * ----------------------------------------------------------------------
 * scope & scope chain
 * - scope chain is defined when function declared
 * - scope chain: an object list
 *  + 0: local (AO)
 *  + 1: AO of conainting function
 *  + 2: GO
 *
 * -------------------------------------------------------------------------
 *
 * Summary
 *
 * Global execution context:
 * + GO
 * + Scope chain (nothing)
 * + this
 *
 *
 * Function executin context: (defined in global)
 * + AO
 * + Scope chain
 *  - local
 *  - GO
 * + this
 *
 * Nested Function execution context (defined in above function)
 * + AO
 * + Scope chain
 *  - local AO
 *  - Parent function AO
 *  - GO
 * + this
 *
 *
 *  */
