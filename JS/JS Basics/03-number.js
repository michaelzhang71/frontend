/* Number
 *
 */

var totalCount = 0; // typical initializing value for number
var positiveZero = 0;
var negativeZero = -0;
console.log(positiveZero == negativeZero);
console.log(positiveZero === negativeZero);

// Infinitiy
var sobig = Infinity;
var alsobig = 1 / 0;
console.log(sobig === alsobig);

// NaN
console.log(Object.is(NaN, NaN));
console.log(Object.is("abc", NaN));

// isNaN & Number.isNaN
console.log(isNaN("abc"));
console.log(Number.isNaN("abc"));

// Max and Min value
var max = Number.MAX_VALUE;
var min = Number.MIN_VALUE;

// different values

var binary = 0b100100;
var oct = 0o234;
var hex = 0x324df;
