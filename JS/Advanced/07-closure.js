/*
 * Closure
 *
 * definition: a function and the variable environment enclosing the function
 * mechanism: scope chain
 *
 *  */

function mother() {
  var motherName = "mother";

  return function son() {
    console.log(motherName);
  };
}

var sonFun = mother();
sonFun();

// closure: motherName (variable environmement) + sonFun

// private variable

function hideCount() {
  var count = 0; // no way to access count from outside except the handler object

  return {
    addCounter: function () {
      count++;
    },
    printCounter: function () {
      console.log("count", count);
    },
  };
}

const countHandler = hideCount();

// 1st add
countHandler.addCounter();
console.log("1st result: ");
countHandler.printCounter();

// 2nd add
countHandler.addCounter();
console.log("2nd result: ");
countHandler.printCounter();

// 3rd add
countHandler.addCounter();
console.log("3rd result: ");
countHandler.printCounter();

// curry函数柯里化

function multiplyTwoNumbers(n1) {
  return function (n2) {
    return n1 * n2;
  };
}

const res = multiplyTwoNumbers(3)(5);
console.log("res", res);
