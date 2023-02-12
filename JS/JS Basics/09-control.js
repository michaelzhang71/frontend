/* Control statement: using logic judgement to execute differently
 * if-else if-else: forking
 * for(){} / while: looping
 * sequence -- fork -- loop
 */

// code block: {} a set of instructions as a whole to be executed or not

var isRainy = false;

if (isRainy) {
  console.log("stay at home");
} else {
  console.log("go to Disney park");
}

var score = 88;
if (score >= 90) {
  console.log("grade A");
} else if (score >= 80) {
  console.log("grade B");
} else if (score >= 70) {
  console.log("grade C");
} else {
  console.log("grade D");
}
