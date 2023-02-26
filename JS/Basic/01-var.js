"use strict"
/*
 * declaring a variable
 * variable: a container for data in Javascript
 *
 * usage:
 * var identifier = value
 * var: notify compiler to create a new variable
 * identifier: the name of the variable
 * variable in js: variable,function,class,module,parameters
 *
 * rules for identifier naming convention:
 * - letter, number, _ and $
 * - cannot start with number
 * - cannot use keyword or reserved word
 * - case sensitive
 * - camelCase recommended
 * Other keyword to define variable: function/class/import/let/const
 * function fn(){} // fn
 * class MyClass {} // MyClass
 * import moduleA from './moduleA.js' // moduleA
 *
 */
// how memory works with below statement
var message = "hello"
// 1. RHL: right hand lookup and create literal value of 'hello'
// 2. LHL: left hand lookup and create variable message
// 3. assignment operation: bind memory address of value to variable


let subject = "Javascript"
const brand = "Poolice"

// case senstive: all different variables
var test = 1
var Test = 2
var tEst = 3
var teSt = 4

// cannot start with number
var $event = "scroll" // special meaning: system/framework/JQ ...
var _count = 10 // special meaning: private variable
var pubDate = "2020-10-20"
var 7SweetTea = 'awesome' // error

// JS convention: camelCase
var firstName = "Joyce"
var lastName = "Zhang"
var seventSweetTea = "cool"

// Python/Ruby convention: snakeCase
var first_name = "Emma"
var last_name = "Liu"
var sevent_sweet_tea = "peach milk tea"
console.log(first_name)

// multiple variables declaration
var grade, school, address
grade = 6
school = "SISU"
address = "Shanghai"

var fruit = "apple",
  drink = "Pepsi",
  food = "pizza"

var size = "XL",
  color = "blue",
  style = "T-shirt"

/* switch two variables */
var first_n = 10
var second_n = 20
console.log("before switch", first_n, second_n)

var [second_n, first_n] = [first_n, second_n]
console.log("after switch", first_n, second_n)
