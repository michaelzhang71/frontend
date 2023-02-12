/*
 * Wrapper Class
 * String
 * Number
 * Boolean
 * Symbol
 * BigInt
 * Provide access to property and method for primitive type
 *
 * Built-in Object
 * Math (object)
 * Date (class)
 *
 * Default process of calling property/method:
 *  - create the wrapper object
 *  - call property/method
 *  - destroy wrapper object
 *  */

// string and String
let str = "heloooo";
console.log("str", str, "type: ", typeof str);
const strObj = new String("heloooo");
console.log("strObj", strObj, "type: ", typeof strObj);

// Number()
Number.MAX_SAFE_INTEGER;
Number.MAX_VALUE;
Number.MIN_SAFE_INTEGER;
Number.MIN_VALUE;
Number.parseFloat(); // --> parseFloat
Number.parseInt(); // --> parseInt
Number.isNaN(); // stricter isNaN() and return true only for NaN

// Number methods
let num = 100;
num.toString(); // to string converion
num.toString(2); // to binary string conversion
num.toString(8); // to oct string conversion
num.toString(16); // to hex string conversion
(123).toString(); // .. double dot syntax

let pi = 3.1415926;
pi.toFixed(2); // string: 2-20 digit after dot
pi.toFixed(3); // string: round

// Math object: providing mathmatical methods/property
/*
 * random()
 * round()
 * floor()
 * ceil()
 * pow()
 * min()
 * max()
 */
// [low, high) random numbers
let low = 5;
let high = 50;
let winner = Math.floor(Math.random() * (high - low)) + low;

// String (array-like iterable)
/* Immutable string/number
 * .length
 * str[index] --> undefined if not found
 * str.charAt(index)  --> '' if not found
 * for...of loop
 * toUpperCase() --> create new string based on old value
 * toLowerCase()
 * indexOf()  --> return -1 if not found
 * lastIndexOf()
 * includes()  --> return false if not found
 * startsWith()
 * endsWith()
 * replace()
 * slice(start, end)  // [start, end) negative allowed
 * substring()
 * substr()
 * concat(n,m,l)
 * trim()  --> eliminate trailing space in front/behind
 * split() --> break up str
 * padStart()
 * padEnd()
 *  */

// use case: '' also returns 0 or true
let student = "Joyce";
console.log("indexOf------");
console.log("J: ", student.indexOf("J"));
console.log("empty: ", student.indexOf(""));
console.log("includes-------");
console.log("J: ", student.includes("J"));
console.log("empty: ", student.includes(""));
