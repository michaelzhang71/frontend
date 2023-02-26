/*
 * Object
 * data container of a collection of multiple key:value pairs
 *
 * data type difference:
 * primitive: pass by value
 * object: pass by reference
 *
 */

var book = {
  undefined: "undefined",
  null: "null",
  NaN: "NaN",
  var: "var",
  author: "Matt",
  publisher: "Penguin Publishing House",
  price: 39.9,
  date: "2019-10-1",
  keywords: ["frontend", "javascript", "modern web"],
  chapters: {
    1: "histroy",
    2: "variables",
    3: "data type",
    4: "control statement",
    5: "function",
  },
};

console.log(book.chapters["1"]);
console.log(book.chapters[2]);
console.log(book.undefined);
console.log("book", book);
