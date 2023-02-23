/*
 * Proxy
 *
 *
 *  */

const person = {
  name: "Joyce",
  age: 14,
};

const proxy = new Proxy(person, {
  get(target, key) {
    return Reflect.get(target, key);
  },
  set(target, key, val) {
    return Reflect.set(target, key, val);
  },
  deleteProperty(target, key) {
    return Reflect.defineProperty(target, key);
  },
  has(target, key) {
    return Reflect.has(target, key);
  },
});

// using proxy to handle person
