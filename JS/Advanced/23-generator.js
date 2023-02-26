/*
 *
 * Generator
 *
 * async/wait: syntactic sugar of promise + generator
 *
 * function execution control
 *
 * generator function returns a special iterator
 *
 *  */

function* makeGenerator(name1) {
  console.log("1:", name1);
  const name2 = yield "stop 1";
  console.log("2: ", name2);
  const name3 = yield "stop 2";
  console.log("3: ", name3);
  const name4 = yield "stop 3";
  console.log("4: ", name4);
}

const generator = makeGenerator("next1");
const yield1 = generator.next();
console.log("yield1", yield1);
const yield2 = generator.next(yield1.value);
console.log("yield2", yield2);
const yield3 = generator.next(yield2.value);
console.log("yield3", yield3);
const yield4 = generator.next(yield3.value);
console.log("yield4", yield4);
