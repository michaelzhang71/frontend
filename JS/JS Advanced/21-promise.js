/*
 *
 * Proxy
 * state: pending --> fullfilled (resolve) or rejected (reject)
 * once change state, promise is finalized
 *
 * fullfilled --> then(cb) can be invoked multiple times
 * rejected --> catch(cb) throw warning when not present but rejcted without catch clause
 *
 * new Promise(executor)
 * executor is a callback immediately executed: (resolve, reject) => {}
 * resolve: return fullfilled value
 *  - resolve(prmitive/compound value);
 *  - resolve(new Promise())
 *  - resolve({ then(resolve){ resolve(val)} })
 * reject: return failure description
 *
 * promise.then().catch().finally(): chaining
 * then(){}: retur a promise
 * catch(){}: also return a promise
 * finally(){}: always execute wheather fulfilled or rejcted
 *
 * Promise static methods:
 * resolve: Promise.resolve()
 * reject: Promise.reject()
 * all: Promise.all()
 *
 *
 * */

const promise = new Promise((resolve, reject) => {
  // console...

  if (Math.floor(Math.random() * 10) > 5) {
    // resolve: primitive and compound value
    resolve(123);
  } else {
    reject("count less than 5");
  }
});

promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    console.log("finally finished");
  });

// promise
//   .then((res) => {
//     console.log("res", res);
//     return 456;
//   })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// static methods

Promise.resolve(123);

// equals to below

new Promise((resolve) => {
  resolve(123);
});

// using _ as a placeholder for parameter of resolve
// Promise.reject("error");
// new Promise((_, reject) => {
//   reject("error");
// });

// static: all()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("❤️");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("JS");
  }, 5000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("res", res);
    console.log(res.join(" "));
  })
  .catch((error) => {
    console.log("error", error);
  });

// allSettled(): when all promises enter fullfilled or rejected
Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log("res", res);
});

// race(): whe one promise enter fullfilled or rejected
Promise.race([p1, p2, p3]).then((res) => {
  console.log("res", res);
});

// any(): when one promise enter fullfilled
