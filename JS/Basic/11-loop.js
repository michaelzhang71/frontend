/* iteration/loop construct
 * while (){}
 * do {} while ()
 * for(){}
 *
 */

// very bad: infinite loop bug
let age = 10;
while (age >= 18) {
  console.log("You are allowed to enter the pub");
}

// good pattern: set up the trigger condition to stop loop
let i = 0;
while (i < 10) {
  console.log("hi" + i);
  i++; // key to set the trigger of stop
}

let count = 0;
while (count <= 100) {
  console.log("count->" + count);
  count += 10;
}

let totalSum = null;
let num = 0;

// 1. sum of all numbers within 100

while (num <= 100) {
  totalSum += num;
  num++;
}
console.log("total of 1-100: ", totalSum);

// 2. sum of all even numbers within 100
totalSum = null;
num = 0;
while (num <= 100) {
  if (num % 2 !== 1) {
    totalSum += num;
  }
  num++;
}
console.log("sum of all even numbers 1-100: ", totalSum);

totalSum = null;
num = 0;
while (num <= 100) {
  totalSum += num;
  num += 2;
}
console.log("sum of all even numbers 1-100: ", totalSum);

// for loop
// for(){}
// for...in
// for...of
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 3; i++) {
    console.log("******\n");
  }
}

// 99 table

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(`${j} X ${i} = ${j * i}\t`);
  }
}

// break: stop the whole loop and jump off (also used in switch statement)
// continue: stop current loop and continue to the next loop cycle
