/* Boolean */
var isAdult = false;
var isLogin = true;

// other values --> boolean
// 0, '', undefined, null and NaN --> false, all others --> true
/* !!value --> boolean true or false */
// logic operator return a boolean value always

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
