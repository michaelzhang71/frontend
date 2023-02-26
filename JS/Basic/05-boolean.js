/* Boolean */
var isAdult = false;
var isLogin = true;

// other values --> boolean
// 0, '', undefined, null and NaN --> false, all others --> true
/* !!value: Boolean(value) */
// logic operator return a boolean value always
// Boolean(val)
// if(val): Boolean(val)

console.log(!!0);
console.log(!!-0);

console.log(!!1);
console.log(!![]);
console.log(!!{});
console.log(!!function () {});

console.log("" == " ");
console.log("undefined == null:", undefined == null);

console.log(Number(undefined));
console.log(Number(null));
