/* Object: a collection of key-value pairs
 * property: non-function value
 * method: function value
 * key:
 *  - string
 * (usually without quote but needed when key name does not follow identifier naming rules)
 *  - Symbol
 *  - [expression]: dynamic key name
 * property CRUD operation:
 *  - read: o.key or o['key]
 *  - create: o.key = value or o['key'] = value
 *  - update: o.key = value or o['key'] = value
 *  - delete: delete o.key or o['key']
 * Create an object:
 *  - {}
 *  - new Object();
 *  - new Person();
 *  - Object.create();
 *  */

// product
const chemical = {
  code: "#12345678",
  name: "PCH Compound",
  weight: "25kg",
  producer: "OCEDIS France",
  price: 1988,
  isDangerous: true,
  physical: "tablet",
  fn: function () {
    console.log("killing bugs in pool water");
  },
  keywords: ["pool chemical", "sanitizer", "free chlorine", "tablet"],
};

console.log("chemical", chemical);

// key arrary method
console.log("chemical keys: ", Object.keys(chemical));

// value array method
console.log("chemical values: ", Object.values(chemical));

// iterate object for...in
for (const key in chemical) {
  // if (Object.hasOwnProperty.call(object, key)) {
  console.log(`${key}: ${chemical[key]}`);

  // }
}

// iteratable object: for...of
for (const item of [1, 2, 3, 4, 5]) {
  console.log("item", item);
}

function foo() {
  console.log("arguments", arguments);
  for (const arg of arguments) {
    console.log("arg", arg);
  }
}

foo("a", "b", "c", "d");

// primitive: pass by value
// object: pass by reference

var a = 10;
var b = a;
b = 20;
console.log("a", a);
console.log("b", b);

var person = {
  name: "joyce",
  age: 14,
};
console.log("person (original):", person);
var student = person;
student.grade = "six";
console.log("person (new):", person);
console.log("student", student);

// comparision

const o1 = {};
const o2 = {};
console.log("o1 === o2:", o1 === o2);
