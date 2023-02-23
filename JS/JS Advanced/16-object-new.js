/*
 * new object notation
 *
 *
 *  */

let studentName = "Joyce";
let age = 14;

// 1. property shorthand

const person = {
  studentName,
  age,
};

// 2. method shorhand

const student = {
  run: function () {},
  // shorthand notation
  eat() {},
};

// 3. computed property

let key = "pin" + " code";
const user = {
  [key]: 123,
};
console.log("user", user);
