/* 8 data types in JS
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 * BigInt
 * Symbol
 * Object
 */

// typeof operator
console.log("'123':", typeof "123");
console.log("123:", typeof 123);
console.log("false:", typeof false);
console.log("undefined:", typeof undefined);
console.log("null:", typeof null);
console.log("bigint:", typeof 123n);
console.log("Symbol:", typeof Symbol(123));
console.log("{}:", typeof {});
console.log("[]:", typeof []);
console.log("fn:", typeof function () {});
console.log("date:", typeof new Date());
console.log("regex:", typeof /w/);
console.log("math:", typeof Math);

// Typeof function to return the real type of all JS data values
// esp with null, [], and other object types
function Typeof(v) {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
}
console.log("-----------------------------");
console.log("'123':", Typeof("123"));
console.log("123:", Typeof(123));
console.log("false:", Typeof(false));
console.log("undefined:", Typeof(undefined));
console.log("null:", Typeof(null));
console.log("bigint:", Typeof(123n));
console.log("Symbol:", Typeof(Symbol(123)));
console.log("{}:", Typeof({}));
console.log("[]:", Typeof([]));
console.log(
  "fn:",
  Typeof(function () {})
);
console.log("date:", Typeof(new Date()));
console.log("regex:", Typeof(/w/));
console.log("math:", Typeof(Math));
console.log("set: ", Typeof(new Set()));
console.log("weakset: ", Typeof(new WeakSet()));
console.log("map: ", Typeof(new Map()));
console.log("weakmap: ", Typeof(new WeakMap()));
console.log("proxy:", Typeof(new Proxy({}, {})));
console.log("promise:", Typeof(new Promise((res, rej) => {})));
