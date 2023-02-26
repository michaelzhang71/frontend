/* Array
 * sequenced collecton of data
 * use index to access each item of the collection
 * literal:[]
 * new Array()
 * Array.isArray()  --> type check
 * arr[index] or arr.at(index) --> support negative index with at()
 * for...of loop
 * .length  --> read and also write to change array
 *  - arr.length: items
 *  - arr.length = longer: add empty spots
 *  - arr.length = shorter: slice array
 *  - arr.length = 0: []
 * ---------------------------
 * CRUD operation: change array
 * push(...items)
 * pop()
 * shift()
 * unshift(...items)
 * sort()
 * reverse()
 * splice(start, delteCount, ...items)
 * -----------------------------
 * does not change array methods:
 * slice(start, end) --> [start, end)
 * concat(...items)
 * join('separator')
 * ------------------------------
 * search methods:
 * indexOf()  --> search primitive value
 * lastIndexOf()
 * findIndex() --> search object
 * find()
 * includes()
 * --------------------------------
 * higher order functions/methods:
 * forEach()
 * find()
 * findIndex()
 * map()
 * reduce()
 * filter()
 * some()
 * every()
 *  */

// array type check
console.log(Array.isArray([]));

// create array
const names = ["abc", "cba", "mba", "abc"];
console.log("names", names);

const letters = new Array(5);
console.log("letters", letters);

const nums = new Array(1, 2, 3, 4, 5);
console.log("nums", nums);
delete nums[2];
console.log("nums", nums);
console.log("nums[2]", nums[2]);
console.log("nums[nums.length]", nums[nums.length]);
console.log("nums[nums.length-1]", nums[nums.length - 1]);
console.log("[]", [].length);
