const courses = ["js", "html", "css"];
const person = {
  name: "Joyce",
  age: 14,
  grade: 6,
};

// destructuring

const [first, second, last] = courses;
const { name, age, grade } = person;

console.log("first", first);
console.log("second", second);
console.log("last", last);
console.log("name", name);
console.log("age", age);
console.log("grade", grade);
