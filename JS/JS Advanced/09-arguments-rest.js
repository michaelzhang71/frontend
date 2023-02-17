/*
 * Arguments and Rest parameter
 * arguments: an array-like object
 * acess like array using index --> arguments[1]
 * length: available property
 *
 * rest: array data type for arrow function (no arguements and this)
 *
 *  */

function foo() {
  console.log("arguments", arguments);

  // 1. convert to array
  const args = Array.from(arguments);

  // 2. spread operator
  const args1 = [...arguments];

  // 3. slice
  const args2 = [].slice.call(arguments);

  // for loop
  const args4 = [];
  for (const arg of arguments) {
    args4.push(arg);
  }

  console.log("args", args);
  console.log("args1", args1);
  console.log("args2", args2);
  console.log("args4", args4);
}

foo("abc", "nba", "cba");

// rest parameter for arrow function and normal function
// rest must be placed at the end

function moo(...args) {
  console.log("args", args);
}

const far = (...args) => {
  console.log("args", args);
};

const ping = (n1, n2, ...args) => {
  console.log("n1", n1);
  console.log("n2", n2);
  console.log("args", args);
};

moo(1, 2, 3);
far(4, 5, 6);
ping(1, 2, 3, 4, 5);
