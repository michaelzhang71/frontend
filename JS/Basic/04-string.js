/* String */

var course = "Javascript";
var tutor = `the ${course} tutor is Ms. Mary`;
var moto = " 'seriousness' is a true power";

console.log("moto", moto);

// length property
console.log(moto.length);
console.log(course + " " + "for Professional Developers");

// Type coersion to string
// 1. toString(): except null, undefined --> cannot invoke toString() method
// 2. toString: {} is converted to '[object Object]'
// 3. String(): works with all types
// 4. data + '': string concat
