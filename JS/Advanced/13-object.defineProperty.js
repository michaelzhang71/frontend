/*
 * Object.defineProperty()
 *
 *
 *  */

// data properties: true when objct created by literal notation
// set by defineProperty: false
const person = {
  name: "Joyce",
  age: 14,
};

let _name = null;
Object.defineProperty(person, "name", {
  // delete control and setting other data properties
  configurable: false,

  // update control
  // writable: true,

  // loop
  enumerable: true,

  // value: return value when accessed
  value: "joyce",

  // get
  get: function () {
    return _name;
  },

  // set
  set: function (val) {
    _name = val;
  },
});

console.log("person.name", person.name);
