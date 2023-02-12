/* recursion
 * calling function itself
 * must have a terminating condition to stop the loop
 *
 */

// Math.pow(x, n)

function pow(x, n) {
  if (n === 1) {
    return x;
  }

  return x * pow(x, n - 1);
}

console.log(pow(2, 3));
console.log(pow(2, 4));
console.log(pow(2, 5));

// sum of range to n

function sumRange(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

console.log(sumRange(3));
console.log(sumRange(4));
console.log(sumRange(5));
console.log(sumRange(100));

// fibanachi()

// 1, 1, 2, 3, 5, 8, 13, 21,.....
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(8));
