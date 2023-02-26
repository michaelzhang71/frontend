/* tertiary operation */

var n1 = 105;
var n2 = 110;

var big = n1 > n2 ? n1 : n2;
console.log("big", big);

// complex format

var res = n1 > n2 ? (n1 *= 10 > 1000 ? n1 : n2) : (n2 *= 5 > 500 ? n2 : n1);
console.log("res", res);
