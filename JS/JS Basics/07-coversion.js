/* Other --> String */
var num = 100;
var flag = false;

// + with a string either side of the operator, result is string
var numStr = num + "";
var flagStr = flag + "";
console.log(numStr, typeof numStr, flagStr, typeof flagStr);

// String()
var numStr2 = String(num);
var flagStr2 = String(flag);

// Object.prototype.toString()

/* Other --> Number */

var input = "123";
// var inputNumber = Number(input);
// + prefix, *1 /1 suffix
var inputNumber = +input;
console.log("inputNumber", inputNumber, typeof inputNumber);

// default conversion
// no + operation and no string present, then all converted to number
var bool = true;
var number = 5;
var res = bool / number;
console.log("res", res);

console.log("empty string: ", Number(""));
console.log("null: ", Number(null));
console.log("false: ", Number(false));
console.log("arr: ", Number([]));
console.log("arr: ", Number([0]));
console.log("arr: ", Number([1]));
console.log("arr: ", Number([1, 2]));
console.log("object: ", Number({}));
