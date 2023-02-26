/* Arithmatic operator
 * + - * ** %
 * += -= *= %=
 * ++/--
 */

// chaining assignment: from right to left precedence
var a = (b = c = 10);

// modify-in-place operator
var startCount = 4;
startCount = startCount + 2;
startCount += 2;

// prefix/suffix usage of ++/--
// when in assigment of operation, prefix: add 1 and use new value
// suffix: use old value and then add 1 after the statement completed

var base = 11;
var goal = ++base;
var res = base++;

console.log(goal, res, base);

// preceduence:

// comparision operator: boolean result
// > < == != === !== >= <=

// logic operator: ! > && > ||
// short circuit application:
// &&: return first falsey value, otherwise return last value
// ||: return first truthy value, otherwise return last value

var first = "abc";
var second = 0;

var res = first && second;
console.log("res &&:", res);
var res = first || second;
console.log("res ||:", res);
