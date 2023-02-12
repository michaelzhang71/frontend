"use strict";
/*
 * declaring a variable
 * var identifier
 * var: notifed compiler to create a new variable
 * identifier: the name of the variable
 * variable in js: variable,function,class,module,parameters
 * rules for identifier:
 * - letter, number, _ and $
 * - cannot start with number
 * - cannot use keyword or reserved word
 * - case sensitive
 * - camelCase recommended
 * Other instruction/keyword: function/class/import/let/const
 */
var message = "hello";
let subject = "Javascript";
const brand = "Poolice";

// multiple variables declaration
var grade, school, address;
grade = 6;
school = "SISU";
address = "Shanghai";

var size = "XL",
  color = "blue",
  style = "T-shirt";

/* switch two variables */
var first_n = 10;
var second_n = 20;
console.log("before switch", first_n, second_n);

var [second_n, first_n] = [first_n, second_n];
console.log("after switch", first_n, second_n);
