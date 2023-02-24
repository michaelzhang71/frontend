/*
 *
 * Iterator
 * an object that can loop through a container
 * iterator.next()
 * produces a series of data of the target contaier using next() method
 *
 * Built-in iteratable object:
 *  - string
 *  - array
 *  - set
 *  - map
 *  - arguments
 *  - nodeList
 *
 *  Applicalbe grammar usage:
 *  - for...of
 *  - spread operator
 *  - destructuring operator
 *  - yield operator
 *  - new Set(iterable)
 *  - new Map(iterable)
 *  - Array.from(iterable)
 *  - Promise.race(iterable)
 *  - Promise.all(iterable)
 *  - Promise.any(iterable)
 *
 *  */

const letters = ["a", "b", "c"];

// define an iterator
let index = 0;
const iterator = {
  next() {
    if (index < letters.length) {
      return {
        done: false, // boolean
        value: letters[index++], // value or undefined
      };
    } else {
      return {
        done: true,
        value: undefined,
      };
    }
  },
};

// add iterator to all objects
Object.prototype[Symbol.iterator] = function () {
  let values = Object.values(this);
  let index = 0;
  const iterator = {
    next() {
      if (index < values.length) {
        return {
          value: values[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
    // listening for loop stop: break, return and throw
    return() {
      console.log("loop is terminated");
      return { done: true };
    },
  };

  return iterator;
};

const student = {
  name: "Joyce",
  age: 14,
  height: 1.65,
};

for (const val of student) {
  console.log("val", val);
}
