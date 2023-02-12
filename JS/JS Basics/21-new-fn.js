/* Constructor Function
 * new Fn():
 *  - 1. create an new object (empty)
 *  - 2. set object[prototype] === Fn.prototype
 *  - 3. set this === object
 *  - 4. execute code
 *  - 5. return object (as long as no explicit return of non-empty object value)
 *
 * ---------------------------------
 * const o = {} is exactly the same as:
 * const o = new Object()
 *
 *  */

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

Student.prototype.school = "JD Huaer";
Student.prototype.study = function () {
  console.log("studying.....");
};

const joyce = new Student("Joyce", 14, "six");
const lucy = new Student("Lucy", 12, "five");

console.log("joyce", joyce);
console.log("lucy", lucy);

console.log("joyce prototype: ", Object.getPrototypeOf(joyce));
